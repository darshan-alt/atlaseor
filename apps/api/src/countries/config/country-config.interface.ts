export interface TaxRule {
    name: string;
    percentage?: number;
    fixedAmount?: number;
    description: string;
}

export interface BenefitRule {
    name: string;
    employerContribution: number;
    employeeContribution: number;
    description: string;
}

export interface CountryConfig {
    countryCode: string;
    currency: string;
    taxRules: TaxRule[];
    statutoryBenefits: BenefitRule[];
    leavePolicy: {
        annualLeave: number;
        sickLeave: number;
    };
}
