import { Property } from '../property';

export class PaginatorDto {
  @Property({ type: 'number', int: true }) take!: number;
  @Property({ type: 'number', int: true }) skip!: number;
  @Property({ type: 'boolean' }) withDeleted!: number;
  @Property({ type: 'string' }) search!: string;
}
