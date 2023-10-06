import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/v1/database/database.module';
import { FilesController } from './files/files.controller';
import { FilesService } from './files/files.service';

@Module({
  imports:[DatabaseModule],
  controllers: [UserController, FilesController],
  providers: [UserService, FilesService]
})
export class UserModule {}
