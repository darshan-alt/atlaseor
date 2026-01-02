import { Injectable, NotFoundException } from '@nestjs/common';
import { CountryCode } from '../generated/client';
import { CountryConfig } from './config/country-config.interface';
import { IndiaConfig } from './config/india.config';
import { USConfig } from './config/us.config';

@Injectable()
export class CountriesService {
    private readonly configs: Record<string, CountryConfig> = {
        [CountryCode.IN]: IndiaConfig,
        [CountryCode.US]: USConfig,
    };

    findAll() {
        return Object.values(this.configs);
    }

    findOne(code: CountryCode): CountryConfig {
        const config = this.configs[code];
        if (!config) {
            throw new NotFoundException(`Configuration for country ${code} not found`);
        }
        return config;
    }

    getCurrency(code: CountryCode): string {
        return this.findOne(code).currency;
    }

    getStatutoryBenefits(code: CountryCode) {
        return this.findOne(code).statutoryBenefits;
    }
}
