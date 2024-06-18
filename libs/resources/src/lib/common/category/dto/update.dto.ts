import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
