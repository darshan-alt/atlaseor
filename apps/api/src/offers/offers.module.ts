import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CountriesModule } from '../countries/countries.module';
import { AuditModule } from '../common/audit/audit.module';

@Module({
    imports: [PrismaModule, CountriesModule, AuditModule],
    controllers: [OffersController],
    providers: [OffersService],
    exports: [OffersService],
})
export class OffersModule { }
