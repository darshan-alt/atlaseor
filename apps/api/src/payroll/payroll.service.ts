import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CountriesService } from '../countries/countries.service';
import { AuditService } from '../common/audit/audit.service';
import { CountryCode, PayrollStatus } from '../generated/client';
import { CalculationService } from '../common/calculation/calculation.service';

@Injectable()
export class PayrollService {
    constructor(
        private prisma: PrismaService,
        private countriesService: CountriesService,
        private auditService: AuditService,
        private calculationService: CalculationService
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
                const calculation = this.calculationService.calculateNetSalary(employee.baseSalary, config);

                return this.prisma.payrollItem.create({
                    data: {
                        payrollId: payroll.id,
                        employeeId: employee.id,
                        grossSalary: employee.baseSalary,
                        netSalary: calculation.netSalary,
                        totalDeductions: calculation.totalDeductions,
                        totalContributions: calculation.totalContributions,
                        details: calculation.details as any,
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

    async previewPayroll(companyId: string, month: number, year: number) {
        // 1. Fetch all active employees
        const employees = await this.prisma.employee.findMany({
            where: { companyId, status: 'ACTIVE' },
        });

        if (employees.length === 0) {
            throw new BadRequestException('No active employees found for this company');
        }

        // 2. Calculate for each
        const previewItems = await Promise.all(
            employees.map(async (employee) => {
                const config = this.countriesService.findOne(employee.country);
                const calculation = this.calculationService.calculateNetSalary(employee.baseSalary, config);

                return {
                    employeeId: employee.id,
                    employeeName: `${employee.firstName} ${employee.lastName}`,
                    country: employee.country,
                    grossSalary: employee.baseSalary,
                    ...calculation,
                };
            })
        );

        // 3. Aggregate totals
        const totals = previewItems.reduce(
            (acc, item) => ({
                grossSalary: acc.grossSalary + item.grossSalary,
                netSalary: acc.netSalary + item.netSalary,
                totalDeductions: acc.totalDeductions + item.totalDeductions,
                totalContributions: acc.totalContributions + item.totalContributions,
            }),
            { grossSalary: 0, netSalary: 0, totalDeductions: 0, totalContributions: 0 }
        );

        return {
            companyId,
            month,
            year,
            employeeCount: employees.length,
            items: previewItems,
            totals,
        };
    }

    async getPayslip(payrollItemId: string, companyId: string) {
        const item = await this.prisma.payrollItem.findFirst({
            where: {
                id: payrollItemId,
                payroll: { companyId },
            },
            include: {
                employee: true,
                payroll: true,
            },
        });

        if (!item) {
            throw new NotFoundException(`Payslip with ID ${payrollItemId} not found`);
        }

        return item;
    }

    async getLedger(companyId: string) {
        return this.prisma.payroll.findMany({
            where: { companyId },
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { items: true },
                },
            },
        });
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
