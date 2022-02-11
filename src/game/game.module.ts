import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameModel } from './schema/game.schema';
import { PublisherModel } from './schema/publisher.schema';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Game', schema: GameModel }]),
    MongooseModule.forFeature([{ name: 'Publisher', schema: PublisherModel }]),
  ],
  controllers: [GameController],
  providers: [
    {
      provide: 'HELLO_SERVICE',
      inject: [ConfigService],
      useFactory: () =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'nestjs_process',
            port: 3003,
          },
        }),
    },
    GameService,
  ],
})
export class GameModule {}
