import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma.module';  // นำเข้า PrismaModule

@Module({
  imports: [PrismaModule],  // เพิ่ม PrismaModule ใน imports
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
