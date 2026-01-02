import { Module } from '@nestjs/common';
import { CompaniesModule } from '../companies/companies.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { AuditModule } from '../common/audit/audit.module';
import { CountriesModule } from '../countries/countries.module';
import { EmployeesModule } from '../employees/employees.module';
import { PayrollModule } from '../payroll/payroll.module';

@Module({
  imports: [
    PrismaModule,
    CompaniesModule,
    AuthModule,
    AuditModule,
    CountriesModule,
    EmployeesModule,
    PayrollModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
