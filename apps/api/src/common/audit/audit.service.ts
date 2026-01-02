import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuditService {
    constructor(private prisma: PrismaService) { }

    async log(data: {
        userId?: string;
        action: string;
        resource: string;
        resourceId?: string;
        payload?: any;
        ipAddress?: string;
        userAgent?: string;
    }) {
        try {
            await this.prisma.auditLog.create({
                data: {
                    userId: data.userId,
                    action: data.action,
                    resource: data.resource,
                    resourceId: data.resourceId,
                    payload: data.payload,
                    ipAddress: data.ipAddress,
                    userAgent: data.userAgent,
                },
            });
        } catch (error) {
            // We don't want to fail the main transaction if audit logging fails
            console.error('Failed to create audit log:', error);
        }
    }
}
