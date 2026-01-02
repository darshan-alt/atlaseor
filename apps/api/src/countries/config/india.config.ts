import { CountryConfig } from './country-config.interface';

export const IndiaConfig: CountryConfig = {
    countryCode: 'IN',
    currency: 'INR',
    taxRules: [
        {
            name: 'Professional Tax',
            fixedAmount: 200,
            description: 'Professional tax varies by state, using standard estimate',
        },
        {
            name: 'TDS',
            percentage: 10,
            description: 'Income tax deducted at source (placeholder)',
        },
    ],
    statutoryBenefits: [
        {
            name: 'EPF',
            employerContribution: 12,
            employeeContribution: 12,
            description: 'Employees Provident Fund',
        },
        {
            name: 'ESI',
            employerContribution: 3.25,
            employeeContribution: 0.75,
            description: 'Employees State Insurance',
        },
    ],
    leavePolicy: {
        annualLeave: 15,
        sickLeave: 12,
    },
};
