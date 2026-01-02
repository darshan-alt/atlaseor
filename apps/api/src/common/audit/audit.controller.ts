import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { AuditService } from '../../common/audit/audit.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../auth/roles.guard';
import { Roles } from '../../auth/roles.decorator';
import { Role } from '../../generated/client';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('audit-logs')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AuditController {
    constructor(private prisma: PrismaService) { }

    @Get()
    @Roles(Role.SUPER_ADMIN, Role.AUDITOR)
    async findAll(
        @Query('resource') resource?: string,
        @Query('action') action?: string,
        @Query('userId') userId?: string
    ) {
        return this.prisma.auditLog.findMany({
            where: {
                resource,
                action,
                userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 100,
        });
    }
}
