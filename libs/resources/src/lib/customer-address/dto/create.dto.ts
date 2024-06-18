import { Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerAddressDto {
  @Property({ type: 'string', minLength: 3, required: true, unique: true })
  name: string;
}
