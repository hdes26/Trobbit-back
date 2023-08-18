import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { AxiosModule } from 'src/axios/axios.module';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [AxiosModule],
})
export class ImagesModule {}
