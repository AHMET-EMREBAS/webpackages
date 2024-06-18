import { PartialType, PickType } from '@nestjs/swagger';
import { CreatePriceDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdatePriceDto extends PartialType(
  PickType(CreatePriceDto, ['price', 'cost'])
) {}
