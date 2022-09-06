import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');

  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  app.enableCors();

  // if (process.env.NODE_ENV === 'development') {
  //   app.enableCors();
  // }
  const PORT = process.env.PORT || serverConfig.port;

  await app.listen(PORT);

  logger.log(`Application starts at port ${PORT}`);
}
bootstrap();
