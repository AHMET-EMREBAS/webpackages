import { PartialType } from '@nestjs/swagger';
import { CreateDiscountDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {}
