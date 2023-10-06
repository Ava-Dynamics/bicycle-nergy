import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from '../../dto/user.create-user.dto';
import { UpdateUserDto } from '../../dto/user.update-user.dto';
import { PrismaService } from 'src/v1/database/prisma/prisma.service';
import { UserEntity } from '../../entities/user.entity';
import { env } from 'process';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService){}

  async create(data: CreateUserDto) {
    
    try {
      const find = await this.prisma.user.findFirst({
          where:{OR:[{username:data.username},{email:data.email}]}
      });
      
      if (find) throw new Error('Username ou E-mail já existente.');

      data.email =  data.email ? data.email.toLowerCase() : null
      data.password = await bcrypt.hash(data.password,Number(env.STORE_SALT));

      let newUser = await this.prisma.user.create({data}); 
      return new UserEntity(newUser);
    } catch (error) {
        return error
    }
  }

  async findAll() {
    try {
      var data = await this.prisma.user.findMany();
      return data.map(value=>new UserEntity(value));
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      if(!id) throw new Error('id invalido');
      const find:CreateUserDto = await this.prisma.user.findFirst({where:{id:Number(id),actived:true}});
      if(!id) throw new Error('Não foi localizado um usuario');
      return new UserEntity(find);
    } catch (error) {
        return error;
    }        
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      if(!id || !updateUserDto) throw new Error('Dados Invalidos');
      const find = await this.prisma.user.findFirst({where:{id:Number(id)}});
      if(!find) throw new Error('nenhum usuario com esse id');
      return new UserEntity(await this.prisma.user.update({where:{id:Number(id)},data:updateUserDto}));
    } catch (error) {
        return error;
    }  
  }

  async remove(id: number) {
    try {
      if(!id) throw new Error("Não foi localizado o id");
      return await this.prisma.user.delete({where:{id:Number(id)}});
    } catch (error) {
      return error;
    }
  }
}
