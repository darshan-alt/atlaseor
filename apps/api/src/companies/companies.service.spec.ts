import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesService } from './companies.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../common/audit/audit.service';
import { CreateCompanyDto } from './dto/create-company.dto';

describe('CompaniesService', () => {
  let service: CompaniesService;
  let prisma: PrismaService;

  const mockPrismaService = {
    $transaction: jest.fn(),
    company: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    user: {
      create: jest.fn(),
    },
  };

  const mockAuditService = {
    log: jest.fn().mockResolvedValue(true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: AuditService,
          useValue: mockAuditService,
        },
      ],
    }).compile();

    service = module.get<CompaniesService>(CompaniesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create company and admin user in transaction', async () => {
      const dto: CreateCompanyDto = {
        name: 'Test Company',
        hqCountry: 'IN',
        adminEmail: 'admin@test.com',
        adminFirstName: 'John',
        adminLastName: 'Doe',
      };

      const mockCompany = {
        id: 'company-123',
        name: dto.name,
        hqCountry: dto.hqCountry,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockUser = {
        id: 'user-123',
        email: dto.adminEmail,
        firstName: dto.adminFirstName,
        lastName: dto.adminLastName,
        role: 'COMPANY_OWNER',
        companyId: mockCompany.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.$transaction as jest.Mock).mockImplementation(async (callback) => {
        return callback({
          company: { create: jest.fn().mockResolvedValue(mockCompany) },
          user: { create: jest.fn().mockResolvedValue(mockUser) },
        });
      });

      const result = await service.create(dto);

      expect(result).toHaveProperty('company');
      expect(result).toHaveProperty('user');
      expect(result.company.name).toBe(dto.name);
      expect(result.user.email).toBe(dto.adminEmail);
      expect(prisma.$transaction).toHaveBeenCalled();
    });

    it('should rollback transaction if user creation fails', async () => {
      const dto: CreateCompanyDto = {
        name: 'Test Company',
        hqCountry: 'US',
        adminEmail: 'admin@test.com',
        adminFirstName: 'Jane',
        adminLastName: 'Smith',
      };

      (prisma.$transaction as jest.Mock).mockRejectedValue(
        new Error('User email already exists')
      );

      await expect(service.create(dto)).rejects.toThrow('User email already exists');
    });
  });

  describe('findAll', () => {
    it('should return array of companies', async () => {
      const mockCompanies = [
        {
          id: 'company-1',
          name: 'Company 1',
          hqCountry: 'IN',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'company-2',
          name: 'Company 2',
          hqCountry: 'US',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      (prisma.company.findMany as jest.Mock).mockResolvedValue(mockCompanies);

      const result = await service.findAll();

      expect(result).toEqual(mockCompanies);
      expect(result).toHaveLength(2);
      expect(prisma.company.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single company by id', async () => {
      const mockCompany = {
        id: 'company-123',
        name: 'Test Company',
        hqCountry: 'IN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.company.findUnique as jest.Mock).mockResolvedValue(mockCompany);

      const result = await service.findOne('company-123');

      expect(result).toEqual(mockCompany);
      expect(prisma.company.findUnique).toHaveBeenCalledWith({
        where: { id: 'company-123' },
      });
    });

    it('should return null if company not found', async () => {
      (prisma.company.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await service.findOne('non-existent-id');

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a company', async () => {
      const updateDto = {
        name: 'Updated Company Name',
      };

      const mockUpdatedCompany = {
        id: 'company-123',
        name: updateDto.name,
        hqCountry: 'IN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.company.update as jest.Mock).mockResolvedValue(mockUpdatedCompany);

      const result = await service.update('company-123', updateDto);

      expect(result.name).toBe(updateDto.name);
      expect(prisma.company.update).toHaveBeenCalledWith({
        where: { id: 'company-123' },
        data: updateDto,
      });
      expect(mockAuditService.log).toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('should delete a company', async () => {
      const mockDeletedCompany = {
        id: 'company-123',
        name: 'Deleted Company',
        hqCountry: 'US',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.company.delete as jest.Mock).mockResolvedValue(mockDeletedCompany);

      const result = await service.remove('company-123');

      expect(result).toEqual(mockDeletedCompany);
      expect(prisma.company.delete).toHaveBeenCalledWith({
        where: { id: 'company-123' },
      });
    });
  });
});
