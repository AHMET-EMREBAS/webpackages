import { Exclude } from 'class-transformer';
import {
  BaseModel,
  BaseModelFields,
  ObjectType,
  OrderDir,
  OrderDirs,
} from '@webpackages/types';
import { Property } from '@webpackages/property';

@Exclude()
export class OrderDto<T extends BaseModel> {
  @Property({ type: 'string', example: 'id' })
  orderBy: keyof T;

  @Property({ type: 'string', enum: OrderDirs, example: 'asc' })
  orderDir: OrderDir;
}

export function CreateOrderDto<T extends BaseModel>(
  orderables: (keyof T)[]
): ObjectType<OrderDto<T>> {
  const orderablesUnique = [
    ...new Set([...BaseModelFields, ...orderables]),
  ] as string[];

  @Exclude()
  class CustomOrderDto<T extends BaseModel> {
    @Property({ type: 'string', enum: orderablesUnique, example: 'id' })
    orderBy!: keyof T;

    @Property({ type: 'string', enum: OrderDirs, example: 'ASC' })
    orderDir!: OrderDir;
  }

  return CustomOrderDto;
}
