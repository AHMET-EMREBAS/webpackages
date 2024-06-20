import { Exclude } from 'class-transformer';
import {
  IBaseEntity,
  BaseEntityFields,
  ObjectType,
  OrderDir,
  OrderDirs,
} from '@webpackages/types';
import { Property } from '@webpackages/property';

@Exclude()
export class OrderDto<T extends IBaseEntity> {
  @Property({ type: 'string', example: 'id' })
  orderBy: keyof T;

  @Property({ type: 'string', enum: OrderDirs, example: 'asc' })
  orderDir: OrderDir;
}

export function CreateOrderDto<T extends IBaseEntity>(
  orderables: (keyof T)[]
): ObjectType<OrderDto<T>> {
  const orderablesUnique = [
    ...new Set([...BaseEntityFields, ...orderables]),
  ] as string[];

  @Exclude()
  class CustomOrderDto<T extends IBaseEntity> {
    @Property({ type: 'string', enum: orderablesUnique, example: 'id' })
    orderBy!: keyof T;

    @Property({ type: 'string', enum: OrderDirs, example: 'ASC' })
    orderDir!: OrderDir;
  }

  return CustomOrderDto;
}
