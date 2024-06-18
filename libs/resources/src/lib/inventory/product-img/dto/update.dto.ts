import { PartialType } from '@nestjs/swagger';
import { CreateProductImgDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateProductImgDto extends PartialType(CreateProductImgDto) {}
