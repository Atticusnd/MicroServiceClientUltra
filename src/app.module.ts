import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import config from './config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(config.DB_URL), GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
