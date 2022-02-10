import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameModel } from './schema/game.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameModel }])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
