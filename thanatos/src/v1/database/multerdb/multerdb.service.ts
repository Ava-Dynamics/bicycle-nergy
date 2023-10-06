import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MulterdbService {
    constructor(private readonly db:PrismaService){}

    // async dbinsert(file:Express.Multer.File,xid:string){
    //     await this.db.productImage.create({
    //         data:{xid:xid,file:{create:{...file,module:'api'}}},
    //         include:{file:true}
    //     })
        
    // }
}
