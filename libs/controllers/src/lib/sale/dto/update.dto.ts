import { PartialType } from '@nestjs/swagger';
import { CreateSaleDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSaleDto extends PartialType(CreateSaleDto) {}
