import { Module } from '@nestjs/common';
import { databaseMongo } from './database.service';

@Module({
  imports: [databaseMongo],
  exports: [databaseMongo],
})
export class DatabaseModule {}
