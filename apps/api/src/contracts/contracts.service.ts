import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../common/audit/audit.service';
import { ContractStatus, OfferStatus } from '../generated/client';

@Injectable()
export class ContractsService {
    constructor(
        private prisma: PrismaService,
        private auditService: AuditService
    ) { }

    async generateFromOffer(offerId: string, companyId: string, user?: any) {
        // 1. Fetch offer
        const offer = await this.prisma.offer.findFirst({
            where: { id: offerId, companyId },
        });

        if (!offer) {
            throw new NotFoundException(`Offer with ID ${offerId} not found`);
        }

        if (offer.status !== OfferStatus.ACCEPTED) {
            // For simulation, we might allow it, but in reality it should be ACCEPTED
            // throw new BadRequestException('Offer must be accepted before generating a contract');
        }

        // 2. Check if contract already exists
        const existingContract = await this.prisma.contract.findUnique({
            where: { offerId },
        });

        if (existingContract) {
            return existingContract;
        }

        // 3. Generate Basic Content (Template)
        const content = ` EMPLOYMENT AGREEMENT
    
    This agreement is between AtlasEOR (on behalf of ${offer.candidateName}) and the Employee.
    
    Position: ${offer.jobTitle}
    Country: ${offer.country}
    Annual Gross Salary: ${offer.salary}
    
    Terms and conditions apply.
    `;

        // 4. Create Contract
        const contract = await this.prisma.contract.create({
            data: {
                companyId,
                offerId,
                status: ContractStatus.DRAFT,
                content,
                legalTerms: {
                    probationPeriod: "3 months",
                    noticePeriod: "30 days"
                },
            },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'GENERATE_CONTRACT',
            resource: 'CONTRACT',
            resourceId: contract.id,
            payload: { offerId },
        });

        return contract;
    }

    async findAll(companyId: string) {
        return this.prisma.contract.findMany({
            where: { companyId },
            include: {
                offer: true,
                employee: true
            }
        });
    }

    async findOne(id: string, companyId: string) {
        const contract = await this.prisma.contract.findFirst({
            where: { id, companyId },
            include: { offer: true, employee: true }
        });

        if (!contract) {
            throw new NotFoundException(`Contract with ID ${id} not found`);
        }

        return contract;
    }

    async updateStatus(id: string, status: ContractStatus, companyId: string, user?: any) {
        const contract = await this.prisma.contract.update({
            where: { id, companyId },
            data: { status },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'UPDATE_CONTRACT_STATUS',
            resource: 'CONTRACT',
            resourceId: id,
            payload: { status },
        });

        return contract;
    }
}
