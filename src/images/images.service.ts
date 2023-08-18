import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { AxiosService } from 'src/axios/axios.service';

@Injectable()
export class ImagesService {
  constructor(private axiosService: AxiosService) {}
  async createFavorite(createImageDto: CreateImageDto) {
    return await this.axiosService.createFavoriteCatImage(createImageDto);
  }

  async findAll() {
    const limit = 10;
    return await this.axiosService.getCatImages(limit);
  }

  async findAllFavorites() {
    return await this.axiosService.getFavoriteCatImages();
  }

  async removeFavorite(favourite_id: string) {
    return await this.axiosService.removeFavoriteCatImage(favourite_id);
  }
}
