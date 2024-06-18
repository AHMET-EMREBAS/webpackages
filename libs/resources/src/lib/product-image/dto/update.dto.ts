import { PartialType } from '@nestjs/swagger';
import { CreateProductImageDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateProductImageDto extends PartialType(CreateProductImageDto) {}
