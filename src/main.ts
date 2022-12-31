import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Config } from 'config';
import { AppModule } from './app.module';
import { Example1Module } from './microservices/example1/example1.module';

async function bootstrap() {
  if (Config.runAs === 'ms') {
    const ms_example1 =
      await NestFactory.createMicroservice<MicroserviceOptions>(
        Example1Module,
        {
          transport: Transport.TCP,
        },
      );
    await ms_example1.listen();
  } else {
    const httpApp = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Example')
      .setDescription('The API description')
      .setVersion('1.0')
      .addTag('example')
      .build();
    const document = SwaggerModule.createDocument(httpApp, config);
    SwaggerModule.setup('api', httpApp, document);

    httpApp.listen(2323);
  }
}
bootstrap();
