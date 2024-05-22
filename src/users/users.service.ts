import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({ data });
    }

    getUsers() {
        return this.prisma.user.findMany();
    }

    getUserById() {}

}
