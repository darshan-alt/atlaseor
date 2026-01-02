import { Test, TestingModule } from '@nestjs/testing';
import { PayrollService } from '../payroll/payroll.service';
import { CalculationService } from '../common/calculation/calculation.service';
import { CountriesService } from '../countries/countries.service';
import { PrismaService } from '../prisma/prisma.service';
import { CountryCode } from '../generated/client';

import { AuditService } from '../common/audit/audit.service';

describe('Payroll Calculation Accuracy', () => {
    let payrollService: PayrollService;
    let calculationService: CalculationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PayrollService,
                CalculationService,
                CountriesService,
                {
                    provide: PrismaService,
                    useValue: {}, // Mocked prisma
                },
                {
                    provide: AuditService,
                    useValue: {},
                }
            ],
        }).compile();

        payrollService = module.get<PayrollService>(PayrollService);
        calculationService = module.get<CalculationService>(CalculationService);
    });

    it('should calculate accurate taxes for India (IN)', () => {
        const baseSalary = 1200000; // 1.2M INR
        const config = {
            countryCode: CountryCode.IN,
            currency: 'INR',
            taxRules: [
                { name: 'Income Tax', percentage: 10, description: 'Standard Income Tax' },
                { name: 'Professional Tax', fixedAmount: 2400, description: 'Annual PT' }
            ],
            statutoryBenefits: [
                { name: 'Provident Fund', employerContribution: 12, employeeContribution: 12, description: 'PF' }
            ],
            leavePolicy: { annualLeave: 15, sickLeave: 12 }
        };

        const result = calculationService.calculateNetSalary(baseSalary, config as any);

        // Tax: 10% of 1.2M = 120,000 + 2,400 (PT) = 122,400
        // PF (Employee): 12% of 1.2M = 144,000
        // Total Deductions: 122,400 + 144,000 = 266,400
        // Net: 1,200,000 - 266,400 = 933,600

        expect(result.netSalary).toBe(933600);
        expect(result.totalDeductions).toBe(266400);
    });

    it('should calculate accurate taxes for USA (US)', () => {
        const baseSalary = 100000; // 100k USD
        const config = {
            countryCode: CountryCode.US,
            currency: 'USD',
            taxRules: [
                { name: 'Federal Tax', percentage: 15, description: 'Federal Income Tax' },
                { name: 'Social Security', percentage: 6.2, description: 'Social Security' }
            ],
            statutoryBenefits: [
                { name: 'Health Insurance', employerContribution: 6, employeeContribution: 6, description: 'Medical' }
            ],
            leavePolicy: { annualLeave: 20, sickLeave: 10 }
        };

        const result = calculationService.calculateNetSalary(baseSalary, config as any);

        // Fed Tax: 15% of 100k = 15,000
        // Soc Sec: 6.2% of 100k = 6,200
        // Health (Employee): 6% of 100k = 6,000
        // Total Deductions: 15,000 + 6,200 + 6,000 = 27,200
        // Net: 100,000 - 27,200 = 72,800

        expect(result.netSalary).toBe(72800);
        expect(result.totalDeductions).toBe(27200);
    });
});
