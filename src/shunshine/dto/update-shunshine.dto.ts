import { PartialType } from '@nestjs/mapped-types';
import { CreateShunshineDto } from './create-shunshine.dto';

export class UpdateShunshineDto extends PartialType(CreateShunshineDto) {}
