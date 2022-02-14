import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameModel } from './schema/game.schema';
import { PublisherModel } from './schema/publisher.schema';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../config';
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
            host: config.HOST_MS,
            port: parseInt(config.PORT_MS),
          },
        }),
    },
    GameService,
  ],
})
export class GameModule {}
