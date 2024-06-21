import { PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateEventDto extends PartialType(CreateEventDto) {}
