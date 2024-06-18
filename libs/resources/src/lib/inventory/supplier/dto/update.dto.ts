import { PartialType } from '@nestjs/swagger';
import { CreateSupplierDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}
