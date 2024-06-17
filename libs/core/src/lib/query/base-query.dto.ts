import { FindOptionsOrderValue } from 'typeorm';
import { Property } from '../property';

export class ClassType {}

export class Order {
  @Property({ type: 'string' })
  orderBy!: string;

  @Property({ type: 'string', enum: ['ASC', 'DESC', 'asc', 'desc'] })
  orderDir!: FindOptionsOrderValue;
}

export class BaseQueryDto {
  @Property({ type: 'number', int: true }) take!: number;
  @Property({ type: 'number', int: true }) skip!: number;
  @Property({ type: 'boolean' }) withDeleted!: number;
  @Property({ type: 'string' }) search!: string;
}
