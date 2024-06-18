import { PartialType } from '@nestjs/swagger';
import { CreatePriceLevelDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdatePriceLevelDto extends PartialType(CreatePriceLevelDto) {}
