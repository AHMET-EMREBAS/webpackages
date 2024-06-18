import { PartialType } from '@nestjs/swagger';
import { CreateClockInDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateClockInDto extends PartialType(CreateClockInDto) {}
