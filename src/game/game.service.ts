import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from './interfaces/game.interface';
import { CreateGameDTO } from './dto/game.dto';
@Injectable()
export class GameService {
  constructor(@InjectModel('Game') private GameModel: Model<Game>) {}
  async create(CreateGameDTO: CreateGameDTO): Promise<any> {
    const createdCat = new this.GameModel(CreateGameDTO);
    return createdCat.save();
  }

  async findAll(): Promise<any> {
    return await this.GameModel.find().exec();
  }

  async findById(id): Promise<Game> {
    const customer = await this.GameModel.findById(id).exec();
    return customer;
  }

  async find(req): Promise<any> {
    return await this.GameModel.find(req).exec();
  }
  async update(id, CreateGameDTO: CreateGameDTO): Promise<any> {
    return await this.GameModel.findByIdAndUpdate(id, CreateGameDTO, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.GameModel.findByIdAndRemove(id);
  }
}
