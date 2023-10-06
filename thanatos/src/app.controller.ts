import { Body, Controller, Get, Logger, Param, Post, Req, Res, Session, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import axios from 'axios';
import * as FormData from 'form-data';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('upload')
  @UseInterceptors(FileInterceptor('file',{dest:'./uploads/products'}))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return JSON.stringify(file);
  }

  @Post('link')
  async linkFile(@Body('link') link:string){
    const response = await axios.get(link, {
      responseType: 'arraybuffer',
    });

    const form = new FormData();
    form.append('file', response.data, 'image.jpg');

    const uploadResponse = await axios.post('http://localhost:3001/upload', form, {
      headers: form.getHeaders(),
    });

    return uploadResponse.data;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async test(@Session() session){
    return session.passport;
  }
}
