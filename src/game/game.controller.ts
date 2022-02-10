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
} from '@nestjs/common';
import { GameService } from './Game.service';
import { CreateGameDTO } from './dto/Game.dto';
@Controller('Game')
export class GameController {
  constructor(private readonly GameService: GameService) {}
  @Post('')
  async addCustomer(@Res() res, @Body() CreateGameDTO: CreateGameDTO) {
    const lists = await this.GameService.create(CreateGameDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been created successfully',
      lists,
    });
  }
  @Get('')
  async findAll(@Res() res) {
    const lists = await this.GameService.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }
  @Get('id')
  async findById(@Res() res, @Query('id') id: string) {
    const lists = await this.GameService.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }
  @Put('')
  async update(
    @Res() res,
    @Query('id') id: string,
    @Body() CreateGameDTO: CreateGameDTO,
  ) {
    const lists = await this.GameService.update(id, CreateGameDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      lists,
    });
  }
  @Delete('')
  async delete(@Res() res, @Query('id') id: string) {
    const lists = await this.GameService.delete(id);
    if (!lists) throw new NotFoundException('Post does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted',
      lists,
    });
  }
}
