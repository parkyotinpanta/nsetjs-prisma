// create-api.dto.ts
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApiDto {
  @ApiProperty({ example: 'park ปาร์ค' })  // ช่วยให้ Swagger เข้าใจว่าต้องการข้อมูลแบบไหน
  @IsString()
  name: string;

  @ApiProperty({ example: 'test@gmail.com' })
  @IsEmail({}, { message: 'เมลไม่ถูกต้อง' })  // ตรวจสอบรูปแบบ email
  email: string;
}
