import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role, CountryCode } from '../generated/client';
import { AuditService } from '../common/audit/audit.service';

@Injectable()
export class CompaniesService {
    constructor(
        private prisma: PrismaService,
        private auditService: AuditService
    ) { }

    async create(createCompanyDto: CreateCompanyDto, adminUser?: any) {
        // Transaction to create Company and the first Admin User together
        const result = await this.prisma.$transaction(async (tx) => {
            const company = await tx.company.create({
                data: {
                    name: createCompanyDto.name,
                    legalName: createCompanyDto.legalName,
                    hqCountry: createCompanyDto.hqCountry as CountryCode,
                    taxId: createCompanyDto.taxId,
                },
            });

            const user = await tx.user.create({
                data: {
                    email: createCompanyDto.adminEmail,
                    firstName: createCompanyDto.adminFirstName,
                    lastName: createCompanyDto.adminLastName,
                    passwordHash: 'TODO_HASH_THIS', // TODO: Add hashing in Auth Epic
                    role: Role.COMPANY_OWNER,
                    companyId: company.id,
                },
            });

            return { company, user };
        });

        // Log the action
        await this.auditService.log({
            userId: adminUser?.id,
            action: 'CREATE',
            resource: 'COMPANY',
            resourceId: result.company.id,
            payload: { name: result.company.name },
        });

        return result;
    }

    findAll() {
        return this.prisma.company.findMany();
    }

    findOne(id: string) {
        return this.prisma.company.findUnique({ where: { id } });
    }

    async update(id: string, updateCompanyDto: UpdateCompanyDto, user?: any) {
        const company = await this.prisma.company.update({
            where: { id },
            data: updateCompanyDto,
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'UPDATE',
            resource: 'COMPANY',
            resourceId: id,
            payload: updateCompanyDto,
        });

        return company;
    }

    async remove(id: string, user?: any) {
        const company = await this.prisma.company.delete({ where: { id } });

        await this.auditService.log({
            userId: user?.id,
            action: 'DELETE',
            resource: 'COMPANY',
            resourceId: id,
        });

        return company;
    }
}
