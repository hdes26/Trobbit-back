import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDto {
  @ApiProperty({ example: 'ebv' })
  @IsString()
  @IsNotEmpty()
  image_id: string;

  @ApiProperty({ example: 'Ache' })
  @IsString()
  @IsNotEmpty()
  sub_id: string;
}
