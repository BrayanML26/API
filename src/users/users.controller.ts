// src/users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: { username: string; password: string }) {
    return this.usersService.createUser(
      createUserDto.username,
      createUserDto.password,
    );
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
