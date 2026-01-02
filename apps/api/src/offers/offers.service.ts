import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfferDto } from './dto/offer.dto';
import { CalculationService } from '../common/calculation/calculation.service';
import { CountriesService } from '../countries/countries.service';
import { AuditService } from '../common/audit/audit.service';
import { OfferStatus } from '../generated/client';

@Injectable()
export class OffersService {
    constructor(
        private prisma: PrismaService,
        private calculationService: CalculationService,
        private countriesService: CountriesService,
        private auditService: AuditService
    ) { }

    async create(createOfferDto: CreateOfferDto, companyId: string, user?: any) {
        // 1. Calculate salary breakdown preview
        const countryConfig = this.countriesService.findOne(createOfferDto.country);
        const calculation = this.calculationService.calculateNetSalary(createOfferDto.salary, countryConfig);

        // 2. Create offer
        const offer = await this.prisma.offer.create({
            data: {
                ...createOfferDto,
                companyId,
                details: calculation as any,
                status: OfferStatus.DRAFT,
            },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'CREATE_OFFER',
            resource: 'OFFER',
            resourceId: offer.id,
            payload: createOfferDto,
        });

        return offer;
    }

    async findAll(companyId: string) {
        return this.prisma.offer.findMany({
            where: { companyId },
        });
    }

    async findOne(id: string, companyId: string) {
        const offer = await this.prisma.offer.findFirst({
            where: { id, companyId },
        });

        if (!offer) {
            throw new NotFoundException(`Offer with ID ${id} not found`);
        }

        return offer;
    }

    async updateStatus(id: string, status: OfferStatus, companyId: string, user?: any) {
        const offer = await this.prisma.offer.update({
            where: { id, companyId },
            data: { status },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'UPDATE_OFFER_STATUS',
            resource: 'OFFER',
            resourceId: id,
            payload: { status },
        });

        return offer;
    }

    async remove(id: string, companyId: string, user?: any) {
        const offer = await this.prisma.offer.delete({
            where: { id, companyId },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'DELETE_OFFER',
            resource: 'OFFER',
            resourceId: id,
        });

        return offer;
    }
}
