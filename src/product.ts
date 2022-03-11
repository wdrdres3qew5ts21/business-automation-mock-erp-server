import { ApiProperty } from '@nestjs/swagger';

export class prRequest {
  @ApiProperty()
  materialName: string;
  @ApiProperty()
  expectDelivery: Date;
}
