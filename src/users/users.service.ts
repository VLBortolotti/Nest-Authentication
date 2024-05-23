import { Injectable, Res } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseDto } from '../dto/response.dto';
import bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput) {
        try {
            const findUserByUsername = await this.prisma.user.findUnique({
                where: {
                    user: data.user
                }
            })
    
            if (findUserByUsername) {
                return new ResponseDto({ type: 'Error', status: 400, message: 'Esse nome já foi pego' });
            }

            const findUserByEmail = await this.prisma.user.findUnique({
                where: {
                    email: data.email
                }
            })

            if (findUserByEmail) {
                return new ResponseDto({ type: 'Error', status: 400, message: 'Esse email já foi pego' })
            }

            const saltRounds = 10;
            const hashedPwd  = await bcrypt.hash(data.password, saltRounds)
    
            let newUserData = {
                user: data.user,
                email: data.email,
                password: hashedPwd
            }
    
            const response = await this.prisma.user.create({ data: newUserData });
            return new ResponseDto({ 
                type: 'Success', 
                status: 201,
                message: 'Success',
                data: response
            });

        } catch (error) {
            return new ResponseDto({ type: 'Error', status: 500, message: error });
        }
    }

    async getUsers() {
        try {
            const response = await this.prisma.user.findMany();

            return new ResponseDto({ 
                type: 'Success', 
                status: 201,
                message: 'Success',
                data: response
            });

        } catch (error) {
            return new ResponseDto({ type: 'Error', status: 500, message: error });
        }
    }

    async getUserById(userId: string) {
        try {
            if (!userId) {
                return new ResponseDto({ type: 'Error', status: 400, message: 'Identificador do usuário não enviado' });
            }

            const response = await this.prisma.user.findUnique({
                where: {
                    user_id: userId
                }
            });

            return new ResponseDto({ type: 'Success', status: 200, message: 'Success', data: response });

        } catch (error) {
            return new ResponseDto({ type: 'Error', status: 500, message: error });
        }
    }

}
