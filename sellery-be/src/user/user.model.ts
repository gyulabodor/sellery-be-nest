import {Role} from "@prisma/client";

export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role
}