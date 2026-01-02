import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CountryCode } from '../../generated/client';

export class CreateOfferDto {
    @IsString()
    @IsNotEmpty()
    candidateName: string;

    @IsEmail()
    @IsNotEmpty()
    candidateEmail: string;

    @IsString()
    @IsNotEmpty()
    jobTitle: string;

    @IsEnum(CountryCode)
    @IsNotEmpty()
    country: CountryCode;

    @IsNumber()
    @IsNotEmpty()
    salary: number;

    @IsOptional()
    validUntil?: Date;
}

export class UpdateOfferStatusDto {
    @IsString()
    @IsNotEmpty()
    status: any; // OfferStatus enum
}
