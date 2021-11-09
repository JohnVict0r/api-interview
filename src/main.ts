import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { TransformResponse } from './transform-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'Origin',
      'X-Requested-With',
    ],
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformResponse());
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
  .setTitle('Api Interview')
  .setDescription('The Blog API description')
  .setVersion('1.0')
  .addTag('posts')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
