import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({ example: 'luffy' })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  age: number;
  @ApiProperty({ example: 'Bengal' })
  @IsString()
  @IsNotEmpty()
  breed: string;
  @ApiProperty({ example: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg' })
  @IsString()
  @IsNotEmpty()
  image: string;
}
