import { Injectable, Logger } from '@nestjs/common';
import { File, User } from '@prisma/client';
import { PrismaService } from 'src/v1/database/prisma/prisma.service';

@Injectable()
export class FilesService {
    constructor(private readonly prisma:PrismaService){}

    async profileUpload(file: any,user:User):Promise<any> {
        file['userid'] = user.id;
        file['buffer'] = file['buffer'].toString("base64");
        await this.prisma.user.update({data:{image:file.filename},where:{id:user.id}})
        return await this.prisma.file.create({data:file})
    }

    async userImage(user:User){
        if(!user) return;
        return await this.prisma.file.findFirst({where:{userid:user.id,fieldname:'profile'}})
    }

}
