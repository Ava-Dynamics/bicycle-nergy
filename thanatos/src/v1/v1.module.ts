import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './modules/user/user.module';

@Module({imports: [DatabaseModule,AuthenticationModule,UserModule], providers: []})
export class V1Module {}
