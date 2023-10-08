import { Controller, Get, Post, Session, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('upload')
  @UseInterceptors(FileInterceptor('file',{dest:'./uploads/products'}))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return JSON.stringify(file);
  }

  @Get('/test')
  async test(@Session() session){
    return session.passport;
  }
}
