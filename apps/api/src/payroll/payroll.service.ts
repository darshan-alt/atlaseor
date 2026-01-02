import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CountriesService } from '../countries/countries.service';
import { AuditService } from '../common/audit/audit.service';
import { CountryCode, PayrollStatus } from '../generated/client';

@Injectable()
export class PayrollService {
    constructor(
        private prisma: PrismaService,
        private countriesService: CountriesService,
        private auditService: AuditService
    ) { }

    async runPayroll(companyId: string, month: number, year: number, user?: any) {
        // 1. Check if payroll already exists for this period
        const existingPayroll = await this.prisma.payroll.findUnique({
            where: {
                companyId_month_year: { companyId, month, year },
            },
        });

        if (existingPayroll && existingPayroll.status === PayrollStatus.COMPLETED) {
            throw new BadRequestException('Payroll for this period is already completed');
        }

        // 2. Fetch all employees for the company
        const employees = await this.prisma.employee.findMany({
            where: { companyId, status: 'ACTIVE' },
        });

        if (employees.length === 0) {
            throw new BadRequestException('No active employees found for this company');
        }

        // 3. Create or update Payroll record
        const payroll = await this.prisma.payroll.upsert({
            where: {
                companyId_month_year: { companyId, month, year },
            },
            update: { status: PayrollStatus.PROCESSING },
            create: {
                companyId,
                month,
                year,
                status: PayrollStatus.PROCESSING,
            },
        });

        // 4. Calculate for each employee
        const items = await Promise.all(
            employees.map(async (employee) => {
                const config = this.countriesService.findOne(employee.country);
                const calculation = this.calculateNetSalary(employee.baseSalary, config);

                return this.prisma.payrollItem.create({
                    data: {
                        payrollId: payroll.id,
                        employeeId: employee.id,
                        grossSalary: employee.baseSalary,
                        netSalary: calculation.netSalary,
                        totalDeductions: calculation.totalDeductions,
                        totalContributions: calculation.totalContributions,
                        details: calculation.details,
                    },
                });
            })
        );

        // 5. Update Payroll status to COMPLETED
        const completedPayroll = await this.prisma.payroll.update({
            where: { id: payroll.id },
            data: { status: PayrollStatus.COMPLETED },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'RUN_PAYROLL',
            resource: 'PAYROLL',
            resourceId: completedPayroll.id,
            payload: { month, year, employeeCount: employees.length },
        });

        return completedPayroll;
    }

    private calculateNetSalary(baseSalary: number, config: any) {
        let totalDeductions = 0;
        let totalContributions = 0;
        const details: any = {
            taxes: [],
            benefits: [],
        };

        // Calculate Taxes
        for (const tax of config.taxRules) {
            let amount = 0;
            if (tax.percentage) {
                amount = (baseSalary * tax.percentage) / 100;
            } else if (tax.fixedAmount) {
                amount = tax.fixedAmount;
            }
            totalDeductions += amount;
            details.taxes.push({ name: tax.name, amount });
        }

        // Calculate Benefits
        for (const benefit of config.statutoryBenefits) {
            const employerAmount = (baseSalary * benefit.employerContribution) / 100;
            const employeeAmount = (baseSalary * benefit.employeeContribution) / 100;
            totalDeductions += employeeAmount;
            totalContributions += employerAmount;
            details.benefits.push({
                name: benefit.name,
                employerAmount,
                employeeAmount,
            });
        }

        const netSalary = baseSalary - totalDeductions;

        return {
            netSalary,
            totalDeductions,
            totalContributions,
            details,
        };
    }

    async getPayrollResults(companyId: string, month: number, year: number) {
        return this.prisma.payroll.findUnique({
            where: {
                companyId_month_year: { companyId, month, year },
            },
            include: {
                items: {
                    include: {
                        employee: true,
                    },
                },
            },
        });
    }
}
