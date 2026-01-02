import { Module } from '@nestjs/common';
import { CompaniesModule } from '../companies/companies.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, CompaniesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
