import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cats, CatsDocument } from 'src/database/core/schemas/cats.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cats.name) private catsModel: Model<CatsDocument>) {}
  async create(createCatDto: CreateCatDto) {
    return await this.catsModel.create(createCatDto);
  }

  async findAll() {
    return await this.catsModel.find({ is_deleted: false });
  }

  async findOne(id: string) {
    return await this.catsModel.findById(id, { is_deleted: false });
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    return await this.catsModel.findByIdAndUpdate(id, updateCatDto);
  }

  async remove(id: string) {
    return await this.catsModel.findByIdAndUpdate(id, {
      is_deleted: true,
      deleted_at: new Date(),
    });
  }
}
