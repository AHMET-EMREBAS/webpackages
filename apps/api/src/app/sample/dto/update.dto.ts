import { PartialType } from '@nestjs/swagger';
import { CreateSampleDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSampleDto extends PartialType(CreateSampleDto) {}
