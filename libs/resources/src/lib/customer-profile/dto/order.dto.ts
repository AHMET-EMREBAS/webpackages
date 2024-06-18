import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerProfile } from '../entities';

@Exclude()
export class OrderCustomerProfileDto extends CreateOrderDto<CustomerProfile>([
  'name',
]) {}
