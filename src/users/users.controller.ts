import { Body, Controller, Get, Param, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body() createUserDto: CreateUserDto, @Res() res: any) {
        const response = await this.usersService.createUser(createUserDto);
    
        response.sendResponse(res);
    }

    @Get()
    async getUsers(@Res() res: any) {
        const response = await this.usersService.getUsers();

        response.sendResponse(res);
    }

    @Get('/:id')
    async getUserById(@Param('id') userId: string, @Res() res: any) {
        const response = await this.usersService.getUserById(userId);

        response.sendResponse(res);
    }
}
