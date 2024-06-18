import { Exclude } from 'class-transformer';
import { BaseEntity } from '../database';
import { Property } from '../property';
import { Type } from '@nestjs/common';

export type OrderDirections = 'asc' | 'desc' | 'ASC' | 'DESC';

@Exclude()
export class OrderDto<T extends BaseEntity> {
  @Property({ type: 'string', example: 'id' })
  orderBy: keyof T;

  @Property({
    type: 'string',
    enum: ['asc', 'desc', 'ASC', 'DESC'],
    example: 'asc',
  })
  orderDir: OrderDirections;
}

export function CreateOrderDto<T extends BaseEntity>(
  orderables: (keyof T)[]
): Type<OrderDto<T>> {
  const orderablesUnique = [
    ...new Set(['id', 'createdAt', 'updatedAt', 'deletedAt', ...orderables]),
  ] as string[];

  @Exclude()
  class CustomOrderDto<T extends BaseEntity> {
    @Property({ type: 'string', enum: orderablesUnique, example: 'id' })
    orderBy!: keyof T;

    @Property({
      type: 'string',
      enum: ['asc', 'desc', 'ASC', 'DESC'],
      example: 'ASC',
    })
    orderDir!: OrderDirections;
  }

  return CustomOrderDto;
}
