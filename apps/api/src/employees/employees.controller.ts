import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ForbiddenException } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../generated/client';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('employees')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) { }

    @Post()
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN)
    create(@Body() createEmployeeDto: CreateEmployeeDto, @CurrentUser() user: any) {
        // For non-SUPER_ADMIN, use their own company ID
        const companyId = user.role === Role.SUPER_ADMIN ? (createEmployeeDto as any).companyId : user.companyId;

        if (!companyId) {
            throw new ForbiddenException('Company ID is required');
        }

        return this.employeesService.create(createEmployeeDto, companyId, user);
    }

    @Get()
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN, Role.MANAGER)
    findAll(@CurrentUser() user: any) {
        if (user.role === Role.SUPER_ADMIN) {
            // SUPER_ADMIN might want to see all employees across all companies
            // For now, let's just use the companyId if provided in query or from user
            return this.employeesService.findAll(user.companyId);
        }
        return this.employeesService.findAll(user.companyId);
    }

    @Get(':id')
    findOne(@Param('id') id: string, @CurrentUser() user: any) {
        return this.employeesService.findOne(id, user.companyId);
    }

    @Patch(':id')
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN)
    update(
        @Param('id') id: string,
        @Body() updateEmployeeDto: UpdateEmployeeDto,
        @CurrentUser() user: any
    ) {
        return this.employeesService.update(id, updateEmployeeDto, user.companyId, user);
    }

    @Delete(':id')
    @Roles(Role.COMPANY_OWNER, Role.SUPER_ADMIN)
    remove(@Param('id') id: string, @CurrentUser() user: any) {
        return this.employeesService.remove(id, user.companyId, user);
    }
}
