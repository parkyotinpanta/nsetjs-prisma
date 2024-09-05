// create-api.dto.ts
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApiDto {
  @ApiProperty({ example: 'John Doe' })  // ช่วยให้ Swagger เข้าใจว่าต้องการข้อมูลแบบไหน
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail({}, { message: 'Invalid email format' })  // ตรวจสอบรูปแบบ email
  email: string;
}
