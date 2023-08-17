import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CatsDocument = Cats & mongoose.Document;

@Schema({
  collection: 'cats',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  autoCreate: true,
})
export class Cats {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  breed: string;

  @Prop({ required: true })
  image: string;

  @Prop({ default: null })
  deleted_at: Date;

  @Prop({ default: false })
  is_deleted: boolean;
}

export const CatsSchema = SchemaFactory.createForClass(Cats);
