import { PartialType } from '@nestjs/swagger';
import { CreateCustomerAccountDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCustomerAccountDto extends PartialType(
  CreateCustomerAccountDto
) {}
