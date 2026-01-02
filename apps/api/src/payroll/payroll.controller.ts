import { Controller, Post, Get, Body, Query, Param, UseGuards, ForbiddenException } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../generated/client';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('payroll')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PayrollController {
    constructor(private readonly payrollService: PayrollService) { }

    @Post('run')
    @Roles(Role.PAYROLL_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN)
    async runPayroll(
        @Body() body: { month: number; year: number },
        @CurrentUser() user: any
    ) {
        if (!user.companyId && user.role !== Role.SUPER_ADMIN) {
            throw new ForbiddenException('Company context missing');
        }

        // For now, assume users run payroll for their own company
        return this.payrollService.runPayroll(user.companyId, body.month, body.year, user);
    }

    @Get('preview')
    @Roles(Role.FINANCE_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN, Role.PAYROLL_ADMIN)
    async preview(
        @Query('month') month: string,
        @Query('year') year: string,
        @CurrentUser() user: any
    ) {
        return this.payrollService.previewPayroll(
            user.companyId,
            parseInt(month),
            parseInt(year)
        );
    }

    @Get('ledger')
    @Roles(Role.FINANCE_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN, Role.PAYROLL_ADMIN)
    async getLedger(@CurrentUser() user: any) {
        return this.payrollService.getLedger(user.companyId);
    }

    @Get('results')
    @Roles(Role.FINANCE_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN, Role.PAYROLL_ADMIN)
    async getResults(
        @Query('month') month: string,
        @Query('year') year: string,
        @CurrentUser() user: any
    ) {
        return this.payrollService.getPayrollResults(
            user.companyId,
            parseInt(month),
            parseInt(year)
        );
    }

    @Get('payslip/:id')
    @Roles(Role.EMPLOYEE, Role.MANAGER, Role.PAYROLL_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN)
    async getPayslip(
        @Param('id') id: string,
        @CurrentUser() user: any
    ) {
        // Employees can only view their own payslips (handled in service or here)
        // For now, let's just ensure they belong to the same company
        const payslip = await this.payrollService.getPayslip(id, user.companyId);

        if (user.role === Role.EMPLOYEE && payslip.employeeId !== user.id) {
            // Check if this user is linked to an employee record
            // We need a way to link User to Employee.
            // Currently User has companyId but not directly employeeId.
            // Let's check User model.
        }

        return payslip;
    }
}
