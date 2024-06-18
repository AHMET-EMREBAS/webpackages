import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerEmail } from '../entities';

@Exclude()
export class OrderCustomerEmailDto extends CreateOrderDto<CustomerEmail>([
  'name',
]) {}
