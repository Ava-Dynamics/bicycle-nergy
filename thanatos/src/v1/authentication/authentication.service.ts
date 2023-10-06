import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/v1/database/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
    constructor(private prisma: PrismaService) {}

    async validateUser(username: string, pass: string): Promise<any> {
      if(!username || !pass) return null;
      const user:User = await this.prisma.user.findFirst({where:{username:username,actived:true}}); //this.usersService.findOne(username);
      if(!user) return null;
      let compare = await bcrypt.compareSync(pass, user.password);
      if (user && compare) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
}
