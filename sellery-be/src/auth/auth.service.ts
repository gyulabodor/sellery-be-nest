import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {User} from "@prisma/client";
import { LoginDto } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
            private jwtService: JwtService,
            private userService: UserService
    ) {}

    async login(loginDto: LoginDto) :Promise<{ access_token: string }> {
        const user = await this.userService.findUserByEmail(loginDto.email);
        if(user?.password !== loginDto.password){
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

    async register(loginDto: LoginDto): Promise<User | null> {
        const user = await this.userService.findUserByEmail(loginDto.email);
        return user;
    }
}
