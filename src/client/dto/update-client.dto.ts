import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
//import { Country } from 'src/typeorm/entities/Country';

export class UpdateClientDto extends PartialType(CreateClientDto) {}
