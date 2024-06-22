import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform: true,
    enableDebugMessages: true,
    errorHttpStatusCode: HttpStatus.BAD_REQUEST
  }));
  await app.listen(process.env.port || 3000);

}
bootstrap();
