import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ForbiddenException } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto, UpdateOfferStatusDto } from './dto/offer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role, OfferStatus } from '../generated/client';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('offers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OffersController {
    constructor(private readonly offersService: OffersService) { }

    @Post()
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN)
    create(@Body() createOfferDto: CreateOfferDto, @CurrentUser() user: any) {
        if (!user.companyId && user.role !== Role.SUPER_ADMIN) {
            throw new ForbiddenException('Company ID is required');
        }
        const companyId = user.role === Role.SUPER_ADMIN ? (createOfferDto as any).companyId : user.companyId;
        return this.offersService.create(createOfferDto, companyId, user);
    }

    @Get()
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN, Role.MANAGER)
    findAll(@CurrentUser() user: any) {
        return this.offersService.findAll(user.companyId);
    }

    @Get(':id')
    findOne(@Param('id') id: string, @CurrentUser() user: any) {
        return this.offersService.findOne(id, user.companyId);
    }

    @Patch(':id/status')
    @Roles(Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN)
    updateStatus(
        @Param('id') id: string,
        @Body() updateDto: UpdateOfferStatusDto,
        @CurrentUser() user: any
    ) {
        return this.offersService.updateStatus(id, updateDto.status as OfferStatus, user.companyId, user);
    }

    @Delete(':id')
    @Roles(Role.COMPANY_OWNER, Role.SUPER_ADMIN)
    remove(@Param('id') id: string, @CurrentUser() user: any) {
        return this.offersService.remove(id, user.companyId, user);
    }
}
