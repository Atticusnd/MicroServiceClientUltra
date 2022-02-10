import { ApiProperty } from '@nestjs/swagger';

export class CreatePublisherDTO {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly siret: number;
  @ApiProperty()
  readonly phone: string;
}
