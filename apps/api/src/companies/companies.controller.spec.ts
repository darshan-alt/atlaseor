import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';

describe('CompaniesController', () => {
  let controller: CompaniesController;
  let service: CompaniesService;

  const mockCompaniesService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [
        {
          provide: CompaniesService,
          useValue: mockCompaniesService,
        },
      ],
    }).compile();

    controller = module.get<CompaniesController>(CompaniesController);
    service = module.get<CompaniesService>(CompaniesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create with DTO', async () => {
      const dto = {
        name: 'Test Company',
        hqCountry: 'IN' as const,
        adminEmail: 'admin@test.com',
        adminFirstName: 'John',
        adminLastName: 'Doe',
      };

      const mockResult = {
        company: { id: '123', name: dto.name },
        user: { id: '456', email: dto.adminEmail },
      };

      mockCompaniesService.create.mockResolvedValue(mockResult);

      const result = await controller.create(dto);

      expect(service.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(mockResult);
    });
  });

  describe('findAll', () => {
    it('should call service.findAll', async () => {
      const mockCompanies = [{ id: '1', name: 'Company 1' }];
      mockCompaniesService.findAll.mockResolvedValue(mockCompanies);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(mockCompanies);
    });
  });

  describe('findOne', () => {
    it('should call service.findOne with id', async () => {
      const mockCompany = { id: '123', name: 'Test Company' };
      mockCompaniesService.findOne.mockResolvedValue(mockCompany);

      const result = await controller.findOne('123');

      expect(service.findOne).toHaveBeenCalledWith('123');
      expect(result).toEqual(mockCompany);
    });
  });

  describe('update', () => {
    it('should call service.update with id and DTO', async () => {
      const updateDto = { name: 'Updated Name' };
      const mockUpdated = { id: '123', name: 'Updated Name' };
      mockCompaniesService.update.mockResolvedValue(mockUpdated);

      const result = await controller.update('123', updateDto);

      expect(service.update).toHaveBeenCalledWith('123', updateDto);
      expect(result).toEqual(mockUpdated);
    });
  });

  describe('remove', () => {
    it('should call service.remove with id', async () => {
      const mockDeleted = { id: '123', name: 'Deleted Company' };
      mockCompaniesService.remove.mockResolvedValue(mockDeleted);

      const result = await controller.remove('123');

      expect(service.remove).toHaveBeenCalledWith('123');
      expect(result).toEqual(mockDeleted);
    });
  });
});
