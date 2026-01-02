export class CreateCompanyDto {
    name: string;
    legalName?: string;
    hqCountry: 'IN' | 'US';
    taxId?: string;
    adminEmail: string;
    adminFirstName: string;
    adminLastName: string;
}
