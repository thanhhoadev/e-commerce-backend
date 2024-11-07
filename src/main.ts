import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  // Dùng ValidationPipe để tự động kiểm tra dữ liệu đầu vào
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}
bootstrap();
