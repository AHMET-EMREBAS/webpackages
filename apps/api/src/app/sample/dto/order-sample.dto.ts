import {
  BaseOrderDto,
  OrderDirections,
  OrderDto,
  OrderProperty,
} from '@webpackages/core';
import { Sample } from '../entities';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSampleDto extends BaseOrderDto implements OrderDto<Sample> {
  @OrderProperty()
  name: OrderDirections;
}
