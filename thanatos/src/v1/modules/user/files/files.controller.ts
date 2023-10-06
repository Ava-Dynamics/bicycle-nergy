import { Controller, Get, Logger, Post, Res, Session, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SessionAuthGuard } from 'src/v1/authentication/auth/session-auth.guard';
import { FilesService } from './files.service';
import { File } from '@prisma/client';
import * as util from 'util';

@Controller('user/files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @UseGuards(SessionAuthGuard)
    @Post('/profile')
    @UseInterceptors(FileInterceptor('profile'))
    async UploadProfileImage(@UploadedFile() file: File,@Session() user:any){
        return await this.filesService.profileUpload(file,user.passport.user)
    }

    @UseGuards(SessionAuthGuard)
    @Get('/profile')
    async ProfileImage(@Session() user,@Res() res:any){
        Logger.log({'user':user})
        if(!user) return false;
        let image =  await this.filesService.userImage(user.passport.user)
        const buffer = Buffer.from(image.buffer, "base64");
        res.type(image.mimetype)
        res.send(buffer);
    }

    @UseGuards(SessionAuthGuard)
    @Get('/profile64')
    async ProfileImage64(@Session() user,@Res() res:any){
        if(!user) return false;
        let image =  await this.filesService.userImage(user.passport.user)
        res.send(image);
    }
}
