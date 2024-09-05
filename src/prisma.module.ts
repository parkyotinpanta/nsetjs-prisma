// src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],  // Export PrismaService เพื่อใช้ในโมดูลอื่น
})
export class PrismaModule {}
