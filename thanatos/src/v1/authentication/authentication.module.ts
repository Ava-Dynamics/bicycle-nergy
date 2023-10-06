import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { DatabaseModule } from 'src/v1/database/database.module';

import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { SessionAuthGuard } from './auth/session-auth.guard';
import { LocalStrategy } from './strategy/local.strategy';
import { SessionSerializer } from './session.serializer';
import { GithubStrategy } from './strategy/github.strategy';
import { GithubAuthGuard } from './auth/github-auth.guard';

@Module({
  imports:[DatabaseModule,PassportModule.register({session:true})],
  controllers: [AuthenticationController],
  providers: [AuthenticationService,GithubStrategy,LocalAuthGuard,SessionAuthGuard,GithubAuthGuard,LocalStrategy,SessionSerializer],
  exports:[LocalAuthGuard,SessionAuthGuard,GithubAuthGuard]
})
export class AuthenticationModule {}
