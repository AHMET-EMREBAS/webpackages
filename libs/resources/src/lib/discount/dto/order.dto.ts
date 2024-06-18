import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Discount } from '../entities';

@Exclude()
export class OrderDiscountDto extends CreateOrderDto<Discount>(['name']) {}
