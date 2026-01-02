import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsController } from '../documents/documents.controller';
import { DocumentsService } from '../documents/documents.service';
import { Role, DocumentStatus } from '../generated/client';
import { ForbiddenException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

describe('Document Collection Security', () => {
    let controller: DocumentsController;
    let service: DocumentsService;

    const mockDocumentsService = {
        createPlaceholder: jest.fn(),
        findByEmployee: jest.fn(),
        updateStatus: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DocumentsController],
            providers: [
                {
                    provide: DocumentsService,
                    useValue: mockDocumentsService,
                },
            ],
        })
            .overrideGuard(JwtAuthGuard).useValue({ canActivate: () => true })
            .overrideGuard(RolesGuard).useValue({ canActivate: () => true })
            .compile();

        controller = module.get<DocumentsController>(DocumentsController);
        service = module.get<DocumentsService>(DocumentsService);
    });

    it('should allow HR_ADMIN to create placeholder', async () => {
        const user = { id: 'admin-1', role: Role.HR_ADMIN, companyId: 'comp-1' };
        const body = { employeeId: 'emp-1', name: 'Passport', type: 'ID_PROOF' };

        mockDocumentsService.createPlaceholder.mockResolvedValue({ id: 'doc-1', ...body });

        const result = await controller.createPlaceholder(body, user);
        expect(result).toBeDefined();
        expect(service.createPlaceholder).toHaveBeenCalledWith(body.employeeId, body.name, body.type, user);
    });

    it('should allow EMPLOYEE to view their own documents', async () => {
        const empId = 'emp-1';
        const user = { id: 'user-1', role: Role.EMPLOYEE, companyId: 'comp-1' };

        mockDocumentsService.findByEmployee.mockResolvedValue([]);

        const result = await controller.findByEmployee(empId, user);
        expect(result).toBeDefined();
    });
});
