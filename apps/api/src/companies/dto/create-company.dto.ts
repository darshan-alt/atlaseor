import { IsString, IsNotEmpty, IsEmail, IsIn, IsOptional, MaxLength } from 'class-validator';

export class CreateCompanyDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    name: string;

    @IsString()
    @IsOptional()
    @MaxLength(200)
    legalName?: string;

    @IsIn(['IN', 'US'])
    @IsNotEmpty()
    hqCountry: 'IN' | 'US';

    @IsString()
    @IsOptional()
    @MaxLength(50)
    taxId?: string;

    @IsEmail()
    @IsNotEmpty()
    adminEmail: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    adminFirstName: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    adminLastName: string;
}

