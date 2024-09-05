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

  const config = new DocumentBuilder()
    .setTitle('API example') //ชื่อโปรแกรม ใน swagger
    .setDescription('API documentation') // deatail ใต้ชื่อ 
    .setVersion('1.0') // เวอร์ชั่น
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document); // ใน string คือ url พาท

    
  await app.listen(3000);
}
bootstrap();
