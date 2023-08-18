import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IFavorites } from 'src/images/interfaces/image.interface';
import axios from 'axios';

@Injectable()
export class AxiosService {
  constructor(private configService: ConfigService) {}

  private readonly restCatsApi = axios.create({
    baseURL: this.configService.get<string>('CAT_API_HOST'),
    headers: {
      'x-api-key': this.configService.get<string>('CAT_API_KEY'),
    },
  });
  async getCatImages(limit: number): Promise<any> {
    try {
      const { data } = await this.restCatsApi.get('/v1/images/search', {
        params: {
          limit,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`error in cats-api v1`);
    }
  }

  async getFavoriteCatImages(): Promise<IFavorites[]> {
    try {
      const { data } = await this.restCatsApi.get('/v1/favourites', {
        params: {
          sub_id: 'Ache',
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`error in cats-api v1`);
    }
  }

  async createFavoriteCatImage(imageData: {
    image_id: string;
    sub_id: string;
  }): Promise<{ message: string; id: number }> {
    try {
      const { data } = await this.restCatsApi.post('/v1/favourites', imageData);
      return data;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`error in cats-api v1`);
    }
  }

  async removeFavoriteCatImage(
    favourite_id: string,
  ): Promise<{ message: string }> {
    try {
      const { data } = await this.restCatsApi.delete(
        `/v1/favourites/${favourite_id}`,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`error in cats-api v1`);
    }
  }
}
