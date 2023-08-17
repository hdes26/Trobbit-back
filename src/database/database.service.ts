import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const databaseMongo = MongooseModule.forRootAsync({
  imports: [ConfigModule.forRoot()],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      uri: configService.get<string>('MG_URI'),
      dbName: configService.get<string>('MGDATABASE'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
      then: Logger.debug(configService.get<string>('MG_URI'), `DB =>`),
    };
  },
});
