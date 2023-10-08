import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Res, Session, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from '@prisma/client';

@Controller('bikes')
export class BikesController {
    constructor(private bikesService: BikesService) {}

    @Get()
    async getBikes(){
        return this.bikesService.getBikes();
    }

    @Get('/ride')
    async getBikeRide(@Session() session){
        return this.bikesService.getBikeRide(session.passport.user);
    }

    @Put('/ride')
    async updateBikeRide(@Session() session,@Body() json){
        return this.bikesService.updateBikeRide(session.passport.user,json.data.bikeid);
    }

    @Delete('/ride')
    async deleteBikeRide(@Session() session,@Body() json) {
        return this.bikesService.deleteBikeRide(session.passport.user,json.bikeid);
    }

    @Get('/:id')
    async getBike(@Param('id',ParseIntPipe) id: number){
        return this.bikesService.getBike(id);
    }


    @Get('/images/:id')
    async getBikeImage(@Res() res, @Param('id',ParseIntPipe) id: number){        
        let image =  await this.bikesService.getBikeImage(id);
        const buffer = Buffer.from(image.buffer, "base64");
        res.type(image.mimetype)
        res.send(buffer);
        return;
    }

    @Post('/images')
    @UseInterceptors(FileInterceptor('profile'))
    async setBikeImage(@UploadedFile() file: File,@Body() json,@Session() session){
        return this.bikesService.setBikeImage(file,json,session.passport.user);
    }
}
