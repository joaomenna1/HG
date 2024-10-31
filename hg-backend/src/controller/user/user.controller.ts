import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../../services/user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/create-user")
  async createUser(@Body() data: Prisma.UserCreateInput) {
    return this.userService.createUser(data);
  }

  @Get("/list-users")
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
