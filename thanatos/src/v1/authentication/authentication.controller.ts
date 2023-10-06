import { Controller, Delete, Get, Logger, Post, Req, Res, Session, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { SessionAuthGuard } from './auth/session-auth.guard';
import { Response } from 'express';
import { GithubAuthGuard } from './auth/github-auth.guard';

@Controller('auth')
export class AuthenticationController {
  constructor() {}
    
    @UseGuards(GithubAuthGuard)
    @Get('loginhub')
    async getloginhub(@Req() req,@Res() res:Response): Promise<any> {
      res.redirect('http://localhost:3000')
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req): Promise<any> {
      Logger.log('login')
      return req.user;
    }
  
    @UseGuards(SessionAuthGuard)
    @Get('login')
    async getlogin(@Req() req,@Res() res:Response): Promise<any> {
      Logger.log('getlogin')
      return res.json(req.user)
    }
  
    @UseGuards(SessionAuthGuard)
    @Delete('login')
    async logoff(@Req() req,@Res() res:Response,@Session() Session): Promise<any> {
      Session.destroy(((err: any) => Logger.log(err)));
      return res.json('foi')
    }

    @UseGuards(SessionAuthGuard)
    @Get('destroy')
    async logoffGet(@Req() req,@Res() res:Response,@Session() Session): Promise<any> {
      Session.destroy(((err: any) => Logger.log(err)));
      return res.json('foi')
    }
}
