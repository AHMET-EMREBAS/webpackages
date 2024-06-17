import { Exclude } from 'class-transformer';
import { BaseEntity } from '../database';
import { Property } from '../property';

export type OrderDirections = 'asc' | 'desc' | 'ASC' | 'DESC';

@Exclude()
export class OrderDto<T extends BaseEntity> {
  @Property({ type: 'string' })
  orderBy!: keyof T;

  @Property({ type: 'string', enum: ['asc', 'desc', 'ASC', 'DESC'] })
  orderDir!: OrderDirections;
}
