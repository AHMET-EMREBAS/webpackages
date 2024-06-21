import { PartialType } from '@nestjs/swagger';
import { CreateClockDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateClockDto extends PartialType(CreateClockDto) {}
