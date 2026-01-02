import { IsString, IsOptional, MaxLength, IsIn } from 'class-validator';

export class UpdateCompanyDto {
    @IsString()
    @IsOptional()
    @MaxLength(200)
    name?: string;

    @IsString()
    @IsOptional()
    @MaxLength(200)
    legalName?: string;

    @IsIn(['IN', 'US'])
    @IsOptional()
    hqCountry?: 'IN' | 'US';

    @IsString()
    @IsOptional()
    @MaxLength(50)
    taxId?: string;
}
