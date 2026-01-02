import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CountryCode } from '../../generated/client';

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEmail()
    @IsOptional()
    workEmail?: string;

    @IsEnum(CountryCode)
    @IsNotEmpty()
    country: CountryCode;
}

export class UpdateEmployeeDto {
    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsEmail()
    @IsOptional()
    workEmail?: string;

    @IsString()
    @IsOptional()
    status?: any; // We can use EmployeeStatus enum here
}
