import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { updateUserDto } from './dto/update-user.dto';
import { createUserDto } from './dto/create-user.dto';
import { WalletService } from 'src/wallet/wallet.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService, private walletService: WalletService) {}

    @Get('')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        return this.userService.getUserById(id)
    }

    @Post()
    async createUser(@Body('') user: createUserDto) {
        return this.userService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body('') user: updateUserDto) {
        return this.userService.updateUser(id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}
