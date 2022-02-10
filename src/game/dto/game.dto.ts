import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
export class CreateGameDTO {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly tags: string[];
  @ApiProperty()
  readonly releaseDate: Date;
  @ApiProperty()
  readonly publisher: ObjectId;
}
