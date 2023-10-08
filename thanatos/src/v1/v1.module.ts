import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { BikesController } from './modules/bikes/bikes.controller';
import { BikesService } from './modules/bikes/bikes.service';

@Module({imports: [DatabaseModule,AuthenticationModule,UserModule], providers: [BikesService], controllers: [BikesController]})
export class V1Module {}
