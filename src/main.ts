import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const PORT = process.env.PORT || serverConfig.port;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  logger.log(`Application starts at port ${PORT}`);
}
bootstrap();
