import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { config } from './shared/config/config.service';


async function bootstrap() {
  const logger = new Logger('Server')
  const app = await NestFactory.create(AppModule);  
  await app.listen(config().PORT.APP_PORT, ()=>{
    logger.log(`Server started on ${config().PORT.APP_PORT}`)
  });
}
bootstrap();
