import { CountryConfig } from './country-config.interface';

export const USConfig: CountryConfig = {
    countryCode: 'US',
    currency: 'USD',
    taxRules: [
        {
            name: 'Federal Income Tax',
            percentage: 15,
            description: 'Estimated federal income tax',
        },
        {
            name: 'State Income Tax',
            percentage: 5,
            description: 'Estimated state income tax (Average)',
        },
    ],
    statutoryBenefits: [
        {
            name: 'FICA (Social Security)',
            employerContribution: 6.2,
            employeeContribution: 6.2,
            description: 'Social Security tax',
        },
        {
            name: 'FICA (Medicare)',
            employerContribution: 1.45,
            employeeContribution: 1.45,
            description: 'Medicare tax',
        },
    ],
    leavePolicy: {
        annualLeave: 10,
        sickLeave: 5,
    },
};
