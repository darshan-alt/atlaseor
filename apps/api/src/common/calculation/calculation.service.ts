import { Injectable } from '@nestjs/common';
import { CountryConfig } from '../../countries/config/country-config.interface';

@Injectable()
export class CalculationService {
    calculateNetSalary(baseSalary: number, config: CountryConfig) {
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
}
