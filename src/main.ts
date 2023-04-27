import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger
  await app.listen(8000, () => {
    logger.verbose(`Application is listening on port 8000`)
  });
}
bootstrap();
