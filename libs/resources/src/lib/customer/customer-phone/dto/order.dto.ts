import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerPhone } from '../entities';

@Exclude()
export class OrderCustomerPhoneDto extends CreateOrderDto<CustomerPhone>([
  'name',
]) {}
