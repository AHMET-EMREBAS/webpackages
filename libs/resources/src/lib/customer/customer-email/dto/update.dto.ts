import { PartialType } from '@nestjs/swagger';
import { CreateCustomerEmailDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCustomerEmailDto extends PartialType(
  CreateCustomerEmailDto
) {}
