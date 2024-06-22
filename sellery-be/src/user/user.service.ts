import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {User} from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findUserByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }
}
