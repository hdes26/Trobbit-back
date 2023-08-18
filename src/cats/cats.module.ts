import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cats, CatsSchema } from 'src/database/core/schemas/cats.schema';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [
    MongooseModule.forFeature([{ name: Cats.name, schema: CatsSchema }]),
  ],
})
export class CatsModule {}
