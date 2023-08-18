import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import {
  ApiBadGatewayResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @ApiOperation({
    summary: 'Create favorite image',
    description: 'Create cat. You will provide the image_id and sub_id',
  })
  @ApiOkResponse({ description: 'Favorite image created' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Post('/favourites/add')
  async create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.createFavorite(createImageDto);
  }
  @ApiOperation({
    summary: 'Get random images',
    description: 'Get random images.',
  })
  @ApiOkResponse({ description: 'Get random images' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Get()
  async findAll() {
    return this.imagesService.findAll();
  }
  @ApiOperation({
    summary: 'Get favorite images',
    description: 'Get favorite images.',
  })
  @ApiOkResponse({ description: 'Get favorite images' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Get('/favourites')
  async findAllFavorites() {
    return this.imagesService.findAllFavorites();
  }
  @ApiOperation({
    summary: 'Remove favorite image',
    description: 'Remove favorite image.',
  })
  @ApiOkResponse({ description: 'Favorite image removed' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Delete('/favourites/delete/:favourite_id')
  async remove(@Param('favourite_id') favourite_id: string) {
    return this.imagesService.removeFavorite(favourite_id);
  }
}
