import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CountriesModule } from '../countries/countries.module';
import { AuditModule } from '../common/audit/audit.module';

@Module({
    imports: [PrismaModule, CountriesModule, AuditModule],
    controllers: [PayrollController],
    providers: [PayrollService],
    exports: [PayrollService],
})
export class PayrollModule { }
