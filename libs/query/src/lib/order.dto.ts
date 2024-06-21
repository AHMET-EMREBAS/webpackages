import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  BaseEntityFields,
  Constructor,
  OrderDir,
  OrderDirs,
} from '@webpackages/types';
import { Property } from '@webpackages/property';

@Exclude()
export class OrderDto<T extends BaseEntity> {
  @Property({ type: 'string', example: 'id' })
  orderBy: keyof T;

  @Property({ type: 'string', enum: OrderDirs, example: 'asc' })
  orderDir: OrderDir;
}

export function CreateOrderDto<T extends BaseEntity>(
  orderables: (keyof T)[]
): Constructor<OrderDto<T>> {
  const orderablesUnique = [
    ...new Set([...BaseEntityFields, ...orderables]),
  ] as string[];

  @Exclude()
  class CustomOrderDto<T extends BaseEntity> {
    @Property({ type: 'string', enum: orderablesUnique, example: 'id' })
    orderBy!: keyof T;

    @Property({ type: 'string', enum: OrderDirs, example: 'ASC' })
    orderDir!: OrderDir;
  }

  return CustomOrderDto;
}
