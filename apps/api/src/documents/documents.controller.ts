import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role, DocumentStatus } from '../generated/client';
import { CurrentUser } from '../auth/current-user.decorator';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('documents')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) { }

    @Post('placeholder')
    @Roles(Role.HR_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN)
    async createPlaceholder(
        @Body() body: { employeeId: string; name: string; type: string },
        @CurrentUser() user: any
    ) {
        return this.documentsService.createPlaceholder(body.employeeId, body.name, body.type, user);
    }

    @Get('employee/:employeeId')
    @Roles(Role.HR_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN, Role.MANAGER, Role.EMPLOYEE)
    async findByEmployee(
        @Param('employeeId') employeeId: string,
        @CurrentUser() user: any
    ) {
        return this.documentsService.findByEmployee(employeeId);
    }

    @Post(':id/upload')
    @Roles(Role.EMPLOYEE, Role.HR_ADMIN, Role.COMPANY_OWNER)
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './apps/api/uploads/documents',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
            },
        }),
    }))
    async uploadFile(
        @Param('id') id: string,
        @UploadedFile() file: any,
        @CurrentUser() user: any
    ) {
        return this.documentsService.updateStatus(id, DocumentStatus.UPLOADED, file.path, user);
    }

    @Patch(':id/status')
    @Roles(Role.HR_ADMIN, Role.COMPANY_OWNER, Role.SUPER_ADMIN)
    async updateStatus(
        @Param('id') id: string,
        @Body() body: { status: DocumentStatus; url?: string },
        @CurrentUser() user: any
    ) {
        return this.documentsService.updateStatus(id, body.status, body.url, user);
    }
}
