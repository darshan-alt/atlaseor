import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role, CountryCode } from '../generated/client';

@Injectable()
export class CompaniesService {
    constructor(private prisma: PrismaService) { }

    async create(createCompanyDto: CreateCompanyDto) {
        // Transaction to create Company and the first Admin User together
        return this.prisma.$transaction(async (tx) => {
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
    }

    findAll() {
        return this.prisma.company.findMany();
    }

    findOne(id: string) {
        return this.prisma.company.findUnique({ where: { id } });
    }

    update(id: string, updateCompanyDto: UpdateCompanyDto) {
        return this.prisma.company.update({
            where: { id },
            data: updateCompanyDto,
        });
    }

    remove(id: string) {
        return this.prisma.company.delete({ where: { id } });
    }
}
