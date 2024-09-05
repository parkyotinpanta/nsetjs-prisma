import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule,DocumentBuilder } from "@nestjs/swagger";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // ลบค่าที่ไม่ได้อยู่ใน DTO ออก
    forbidNonWhitelisted: true, // ถ้าพบค่าที่ไม่ได้อยู่ใน DTO จะโยน error
    transform: true, // แปลงค่า input ตาม DTO
  }));

  
  // const config = new DocumentBuilder()
  //   .setTitle('Cats example')
  //   .setDescription('The cats API description')
  //   .setVersion('1.0')
  //   .addTag('cats')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);

    
  await app.listen(3000);
}
bootstrap();
