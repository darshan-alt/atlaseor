import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards, ForbiddenException } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../generated/client';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('companies')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) { }

    @Post()
    @Roles(Role.SUPER_ADMIN)
    create(@Body() createCompanyDto: CreateCompanyDto, @CurrentUser() user: any) {
        return this.companiesService.create(createCompanyDto, user);
    }

    @Get()
    @Roles(Role.SUPER_ADMIN)
    findAll() {
        return this.companiesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @CurrentUser() user: any) {
        // Tenant Isolation: Only Allow SUPER_ADMIN or users from the same company
        if (user.role !== Role.SUPER_ADMIN && user.companyId !== id) {
            throw new ForbiddenException('You do not have access to this company');
        }
        return this.companiesService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateCompanyDto: UpdateCompanyDto,
        @CurrentUser() user: any
    ) {
        // Tenant Isolation: Only Allow SUPER_ADMIN or COMPANY_OWNER of the same company
        if (user.role !== Role.SUPER_ADMIN && (user.role !== Role.COMPANY_OWNER || user.companyId !== id)) {
            throw new ForbiddenException('You do not have permission to update this company');
        }
        return this.companiesService.update(id, updateCompanyDto, user);
    }

    @Delete(':id')
    @Roles(Role.SUPER_ADMIN)
    remove(@Param('id') id: string, @CurrentUser() user: any) {
        return this.companiesService.remove(id, user);
    }
}

