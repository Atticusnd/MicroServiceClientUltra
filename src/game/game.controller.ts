import {
  Controller,
  Res,
  Query,
  Get,
  HttpStatus,
  Post,
  Body,
  NotFoundException,
  Put,
  Delete,
  Inject,
  Param,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDTO } from './dto/game.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('Game')
export class GameController {
  constructor(
    @Inject('HELLO_SERVICE') private client: ClientProxy,
    private readonly gameService: GameService,
  ) {}
  @Post('')
  async addCustomer(@Res() res, @Body() createGameDTO: CreateGameDTO) {
    const lists = await this.gameService.create(createGameDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Game has been created successfully',
      lists,
    });
  }
  @Get('')
  async findAll(@Res() res) {
    const lists = await this.gameService.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }
  @Get(':id')
  async findById(@Res() res, @Param('id') id: string) {
    const lists = await this.gameService.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }
  @Put('')
  async update(
    @Res() res,
    @Query('id') id: string,
    @Body() CreateGameDTO: CreateGameDTO,
  ) {
    const lists = await this.gameService.update(id, CreateGameDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Game has been successfully updated',
      lists,
    });
  }
  @Delete('')
  async delete(@Res() res, @Query('id') id: string) {
    const lists = await this.gameService.delete(id);
    if (!lists) throw new NotFoundException('Post does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Game has been deleted',
      lists,
    });
  }
  @Get('/discount')
  startProcess(@Param('name') name = 'there') {
    // Forwards the name to our hello service, and returns the results
    return this.client.send({ cmd: 'hello' }, name);
  }
}
