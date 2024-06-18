import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CustomerImg } from '../entities';

@Exclude()
export class OrderCustomerImgDto extends CreateOrderDto<CustomerImg>([
  'name',
]) {}
