import { PartialType } from '@nestjs/swagger';
import { CreateCustomerPhoneDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCustomerPhoneDto extends PartialType(
  CreateCustomerPhoneDto
) {}
