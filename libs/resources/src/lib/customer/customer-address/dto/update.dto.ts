import { PartialType } from '@nestjs/swagger';
import { CreateCustomerAddressDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCustomerAddressDto extends PartialType(
  CreateCustomerAddressDto
) {}
