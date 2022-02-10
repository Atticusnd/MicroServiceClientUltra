import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import config from './config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://atticusfj:2005ct27@cluster0.ru2tc.mongodb.net/ultra?retryWrites=true&w=majority',
    ),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
