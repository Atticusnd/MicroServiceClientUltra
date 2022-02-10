import { ApiProperty } from '@nestjs/swagger';
export class CreateGameDTO {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly tags: [string];
  @ApiProperty()
  readonly releaseDate: Date;
}
