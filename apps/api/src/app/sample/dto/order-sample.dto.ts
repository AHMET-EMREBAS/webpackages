import { OrderDirections, OrderDto, OrderProperty } from '@webpackages/core';
import { Sample } from '../entities';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSample implements OrderDto<Sample> {
  @OrderProperty()
  id: OrderDirections;

  @OrderProperty()
  name: OrderDirections;
}
