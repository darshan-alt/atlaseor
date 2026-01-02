import { Global, Module } from '@nestjs/common';
import { CalculationService } from './calculation.service';

@Global()
@Module({
    providers: [CalculationService],
    exports: [CalculationService],
})
export class CalculationModule { }
