import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('OrdesMS-Main');

  await app.listen(envs.port);

  logger.log(`Application is running on: http://localhost:${envs.port}`);
}
bootstrap();
