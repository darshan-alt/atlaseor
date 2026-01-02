import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards, Patch, Param, ForbiddenException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { Role } from '../generated/client';
import { CurrentUser } from './current-user.decorator';

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
        const companyId = registerDto.companyId;
        if (!companyId) {
            throw new ForbiddenException('Company ID is required for registration');
        }
        return this.authService.register(registerDto, companyId);
    }

    @Get('users')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.COMPANY_OWNER, Role.SUPER_ADMIN, Role.HR_ADMIN, Role.MANAGER)
    async getUsers(@CurrentUser() user: any) {
        // Only return users for the same company, unless SUPER_ADMIN
        const where = user.role === Role.SUPER_ADMIN ? {} : { companyId: user.companyId };
        return this.authService.findAll(where);
    }

    @Patch('users/:id/role')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.COMPANY_OWNER, Role.SUPER_ADMIN)
    async updateRole(
        @Param('id') id: string,
        @Body('role') role: Role,
        @CurrentUser() currentUser: any
    ) {
        // TODO: Verification logic in service
        return this.authService.updateRole(id, role, currentUser);
    }
}
