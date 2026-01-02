import { Injectable, UnauthorizedException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Role } from '../generated/client';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    async validatePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    async register(registerDto: RegisterDto, companyId: string) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: registerDto.email },
        });

        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const passwordHash = await this.hashPassword(registerDto.password);

        const user = await this.prisma.user.create({
            data: {
                email: registerDto.email,
                passwordHash,
                firstName: registerDto.firstName,
                lastName: registerDto.lastName,
                companyId,
                role: 'EMPLOYEE',
            },
        });

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            companyId: user.companyId,
        };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
            },
        };
    }

    async login(loginDto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: loginDto.email },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await this.validatePassword(
            loginDto.password,
            user.passwordHash
        );

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            companyId: user.companyId,
        };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                companyId: user.companyId,
            },
        };
    }

    async validateUser(userId: string) {
        return this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                companyId: true,
            },
        });
    }

    async findAll(where: any) {
        return this.prisma.user.findMany({
            where,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                companyId: true,
            },
        });
    }

    async updateRole(id: string, role: Role, currentUser: any) {
        const userToUpdate = await this.prisma.user.findUnique({
            where: { id },
        });

        if (!userToUpdate) {
            throw new NotFoundException('User not found');
        }

        if (currentUser.role !== Role.SUPER_ADMIN && userToUpdate.companyId !== currentUser.companyId) {
            throw new ForbiddenException('Cannot update users from another company');
        }

        return this.prisma.user.update({
            where: { id },
            data: { role },
        });
    }
}
