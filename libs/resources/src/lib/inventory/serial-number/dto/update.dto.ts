import { PartialType } from '@nestjs/swagger';
import { CreateSerialNumberDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSerialNumberDto extends PartialType(CreateSerialNumberDto) {}
