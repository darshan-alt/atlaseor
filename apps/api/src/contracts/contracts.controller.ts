import { Controller, Get, Post, Body, Patch, Param, UseGuards, ForbiddenException } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role, ContractStatus } from '../generated/client';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('contracts')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ContractsController {
    constructor(private readonly contractsService: ContractsService) { }

    @Post('generate-from-offer/:offerId')
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN)
    generateFromOffer(@Param('offerId') offerId: string, @CurrentUser() user: any) {
        return this.contractsService.generateFromOffer(offerId, user.companyId, user);
    }

    @Get()
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN, Role.MANAGER)
    findAll(@CurrentUser() user: any) {
        return this.contractsService.findAll(user.companyId);
    }

    @Get(':id')
    findOne(@Param('id') id: string, @CurrentUser() user: any) {
        return this.contractsService.findOne(id, user.companyId);
    }

    @Patch(':id/status')
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN)
    updateStatus(
        @Param('id') id: string,
        @Body('status') status: ContractStatus,
        @CurrentUser() user: any
    ) {
        return this.contractsService.updateStatus(id, status, user.companyId, user);
    }
}
