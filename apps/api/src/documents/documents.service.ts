import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../common/audit/audit.service';
import { DocumentStatus } from '../generated/client';

@Injectable()
export class DocumentsService {
    constructor(
        private prisma: PrismaService,
        private auditService: AuditService
    ) { }

    async createPlaceholder(employeeId: string, name: string, type: string, user?: any) {
        const doc = await this.prisma.document.create({
            data: {
                employeeId,
                name,
                type,
                status: DocumentStatus.PENDING,
            },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'CREATE',
            resource: 'DOCUMENT',
            resourceId: doc.id,
        });

        return doc;
    }

    async updateStatus(id: string, status: DocumentStatus, url?: string, user?: any) {
        const doc = await this.prisma.document.update({
            where: { id },
            data: { status, url },
        });

        await this.auditService.log({
            userId: user?.id,
            action: 'UPDATE',
            resource: 'DOCUMENT',
            resourceId: id,
            payload: { status, url },
        });

        return doc;
    }

    async findByEmployee(employeeId: string) {
        return this.prisma.document.findMany({
            where: { employeeId },
        });
    }

    async findOne(id: string) {
        const doc = await this.prisma.document.findUnique({
            where: { id },
            include: { employee: true },
        });

        if (!doc) {
            throw new NotFoundException(`Document with ID ${id} not found`);
        }

        return doc;
    }
}
