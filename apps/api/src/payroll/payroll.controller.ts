import { Controller, Post, Get, Body, Query, UseGuards, ForbiddenException } from '@nestjs/common';
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
}
