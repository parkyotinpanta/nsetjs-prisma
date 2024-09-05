import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApiDto {
  @ApiProperty({ example: 'park ปาร์ค', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'test@gmail.com', required: false })
  @IsOptional()
  @IsEmail({}, { message: 'เมลไม่ถูกต้อง' }) // พอใช้ เม็ดตอด IsEmail ต้องมี @ เสมอ
  email?: string;
}
