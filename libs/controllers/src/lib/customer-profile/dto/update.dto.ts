import { PartialType } from '@nestjs/swagger';
import { CreateCustomerProfileDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCustomerProfileDto extends PartialType(
  CreateCustomerProfileDto
) {}
