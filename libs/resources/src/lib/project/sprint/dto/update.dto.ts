import { PartialType } from '@nestjs/swagger';
import { CreateSprintDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSprintDto extends PartialType(CreateSprintDto) {}
