import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateUserDto } from './dto/update-user.dto';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(private prismaService: PrismaService) {}

    getAllUsers(): Promise<user[]> {
        return this.prismaService.user.findMany();
    }

    getUserById(id: number): Promise<user> {
        return this.prismaService.user.findUnique({
            where:{
                id
            }  
        });
    }

    createUser(user: any): Promise<user> {
        return this.prismaService.user.create({
            data: {
                ...user,
                wallet: {
                    create: {
                        
                    }
                }
            }
        });
    }

    updateUser(id: number, data: any): Promise<user> {
        return this.prismaService.user.update({
            where:{
                id
            },
            data
        });
    }

    deleteUser(id: number): Promise<user> {
        return this.prismaService.user.delete({
            where:{
                id
            }
        });
    }
}
