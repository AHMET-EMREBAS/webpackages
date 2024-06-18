import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerAddress } from '../entities';

@Exclude()
export class OrderCustomerAddressDto extends CreateOrderDto<CustomerAddress>([
  'name',
]) {}
