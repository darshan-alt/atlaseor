export enum Role {
    SUPER_ADMIN = 'SUPER_ADMIN',
    COMPANY_OWNER = 'COMPANY_OWNER',
    HR_ADMIN = 'HR_ADMIN',
    PAYROLL_ADMIN = 'PAYROLL_ADMIN',
    FINANCE_ADMIN = 'FINANCE_ADMIN',
    MANAGER = 'MANAGER',
    EMPLOYEE = 'EMPLOYEE',
    AUDITOR = 'AUDITOR',
}

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: Role;
    companyId?: string;
}

export interface AuthResponse {
    access_token: string;
    user: User;
}
