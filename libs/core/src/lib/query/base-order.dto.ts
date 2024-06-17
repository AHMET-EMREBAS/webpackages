import { BaseEntity } from '../database';
import { OrderDirections, OrderDto } from './order.dto';
import { OrderProperty } from './order-property';

export class BaseOrderDto implements OrderDto<BaseEntity> {
  @OrderProperty() createdAt!: OrderDirections;
  @OrderProperty() updatedAt!: OrderDirections;
  @OrderProperty() deletedAt!: OrderDirections;
  @OrderProperty() id!: OrderDirections;
}
