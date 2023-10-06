import { Strategy } from 'passport-github2';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';


@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      clientID: 'aa6b176880e9165e1fcf',
      clientSecret: '43ce80981575318eeffa153768c3f1513addbe27',
      callbackURL: 'http://localhost:3000/api/auth/loginhub',
      scope: ['user']
    });
  }

  async validate(accessToken, refreshToken, profile): Promise<any> {
    Logger.log({"github":[accessToken, refreshToken, profile]})
    return {
      id: 2,
      email: 'linete@teste.com',
      name: 'Linete Batista',
      username: 'LineteB',
      actived: true,
      image: null,
      tenantID: 'cljuv452m0000qeo8a4gqa5li'
    }
  }
}