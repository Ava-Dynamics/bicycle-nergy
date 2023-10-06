import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client'
import { ValidationPipe } from '@nestjs/common'
import * as passport from 'passport';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true  // Para remover valores não validos enviado nos post/patch
  }))

  app.use(
    session({
      cookie: {
       maxAge: 7 * 24 * 60 * 60 * 1000 // ms
      },
      secret: 'Caminhando sem rumo',
      resave: true,
      saveUninitialized: true,
      store: new PrismaSessionStore(
        new PrismaClient(),
        {
          checkPeriod: 2 * 60 * 1000,  //ms
          dbRecordIdIsSessionId: true,
          dbRecordIdFunction: undefined,
        }
      )
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const config = new DocumentBuilder()
  .setTitle('Riziys')
  .setDescription('Uma loja')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiv1', app, document);

  await app.listen(3001);
}
bootstrap();