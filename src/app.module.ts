// src/app.module.ts
import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ApiModule],  // นำเข้า ApiModule
  providers: [PrismaService],
})
export class AppModule {}
