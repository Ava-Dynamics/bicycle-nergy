import { Controller, Get, Post, Body, Patch, Param, Delete, ClassSerializerInterceptor, UseInterceptors, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/v1/database/prisma/prisma.service'
import { User } from '@prisma/client';
import { UserEntity } from '../../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly prisma: PrismaService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll() {
    var data = await this.userService.findAll();
    return data.map((value: Partial<UserEntity>)=>new UserEntity(value))
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  async update(@Param('id',ParseIntPipe) id: number, @Body() user: User) {
    return this.userService.update(id, user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  async remove(@Param('id',ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
