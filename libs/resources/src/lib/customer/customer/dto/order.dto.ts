import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Customer } from '../entities';

@Exclude()
export class OrderCustomerDto extends CreateOrderDto<Customer>([
  'username',
  'password',
]) {}
