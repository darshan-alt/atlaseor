import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { AuditService } from '../common/audit/audit.service';

@Injectable()
export class EmployeesService {
    constructor(
        private prisma: PrismaService,
        private auditService: AuditService
    ) { }

    async create(createEmployeeDto: CreateEmployeeDto, companyId: string, user?: any) {
        const employee = await this.prisma.employee.create({
            data: {
                ...createEmployeeDto,
                companyId,
            },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'CREATE',
            resource: 'EMPLOYEE',
            resourceId: employee.id,
            payload: createEmployeeDto,
        });

        return employee;
    }

    findAll(companyId: string) {
        return this.prisma.employee.findMany({
            where: { companyId },
            include: {
                manager: true,
                directReports: true,
            },
        });
    }

    async findOne(id: string, companyId: string) {
        const employee = await this.prisma.employee.findFirst({
            where: { id, companyId },
        });

        if (!employee) {
            throw new NotFoundException(`Employee with ID ${id} not found`);
        }

        return employee;
    }

    async update(id: string, updateEmployeeDto: UpdateEmployeeDto, companyId: string, user?: any) {
        const employee = await this.prisma.employee.update({
            where: { id, companyId },
            data: updateEmployeeDto,
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'UPDATE',
            resource: 'EMPLOYEE',
            resourceId: id,
            payload: updateEmployeeDto,
        });

        return employee;
    }

    async remove(id: string, companyId: string, user?: any) {
        const employee = await this.prisma.employee.delete({
            where: { id, companyId },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'DELETE',
            resource: 'EMPLOYEE',
            resourceId: id,
        });

        return employee;
    }
}
