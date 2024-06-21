import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseOrderDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdatePurchaseOrderDto extends PartialType(
  CreatePurchaseOrderDto
) {}
