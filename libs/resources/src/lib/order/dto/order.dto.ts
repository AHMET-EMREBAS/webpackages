import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Order } from '../entities';

@Exclude()
export class OrderOrderDto extends CreateOrderDto<Order>(['name']) {}
