import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {
  ApiBadGatewayResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @ApiOperation({
    summary: 'Create Cat',
    description: 'Create cat. You will provide the name,age,breed and image',
  })
  @ApiOkResponse({ description: 'Cat created' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Post('/add')
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catsService.create(createCatDto);
  }
  @ApiOperation({
    summary: 'Get Cats',
    description: 'Get cats.',
  })
  @ApiOkResponse({ description: 'Gets cat' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Get()
  async findAll() {
    return await this.catsService.findAll();
  }
  @ApiOperation({
    summary: 'Get a Cat',
    description: 'Get a cat. You will provide cat id',
  })
  @ApiOkResponse({ description: 'Get a  cat' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.catsService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update a Cat',
    description: 'Update a cat. You will provide cat id',
  })
  @ApiOkResponse({ description: 'Cat updated' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return await this.catsService.update(id, updateCatDto);
  }
  @ApiOperation({
    summary: 'Remove a Cat',
    description: 'Remove a cat. You will provide cat id',
  })
  @ApiOkResponse({ description: 'Cat removed' })
  @ApiBadGatewayResponse({ status: 502, description: 'Something happened' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.catsService.remove(id);
  }
}
