import { Module } from '@nestjs/common';
import { RedisService } from './redis/redis.service';
import { PrismaService } from './prisma/prisma.service';
import { MulterdbService } from './multerdb/multerdb.service';

@Module({
  controllers: [],
  providers: [RedisService, PrismaService, MulterdbService],
  exports: [RedisService, PrismaService],
})
export class DatabaseModule {}
