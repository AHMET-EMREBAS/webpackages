import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {}
