// Mock Prisma Client for Jest tests
export const PrismaClient = jest.fn();
export const Role = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    COMPANY_OWNER: 'COMPANY_OWNER',
    HR_ADMIN: 'HR_ADMIN',
    PAYROLL_ADMIN: 'PAYROLL_ADMIN',
    FINANCE_ADMIN: 'FINANCE_ADMIN',
    MANAGER: 'MANAGER',
    EMPLOYEE: 'EMPLOYEE',
    AUDITOR: 'AUDITOR',
};
export const CountryCode = {
    IN: 'IN',
    US: 'US',
};
export const EmployeeStatus = {
    ONBOARDING: 'ONBOARDING',
    ACTIVE: 'ACTIVE',
    ON_LEAVE: 'ON_LEAVE',
    TERMINATED: 'TERMINATED',
};
