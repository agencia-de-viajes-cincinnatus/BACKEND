import { IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;

  @IsString()
  contract: string;

  @IsString()
  type: string;
}
