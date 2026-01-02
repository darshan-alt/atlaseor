import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        // For now, we'll require companyId in the request
        // In a real app, this might come from the JWT or be part of a signup flow
        const companyId = '32b40bb4-1d8f-4bdd-bea4-cdbf47e11162'; // TODO: Get from context
        return this.authService.register(registerDto, companyId);
    }
}
