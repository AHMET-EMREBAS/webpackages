import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
