import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

      @Get()
      getUsers(@Query('sortBy') sortBy: string) {
            console.log(sortBy)
            return { username: 'Anson', email: 'anson@anson.com' }
      }

      @Get('posts')
      getUsersPosts() {
            return [{ username: 'Anson', email: 'anson@anson.com', posts: [{ id: 1, title: 'Post1', }, { id: 2, title: 'Post2', }, { id: 3, title: 'Post3', }] }]
      }

      @Post('create')
      createUser(@Body() userData: CreateUserDto) {
            console.log(userData)
            return {}
      }

      @Get(':id')
      getUserById(@Param('id') id: string) {
            return { id }
      }
}

