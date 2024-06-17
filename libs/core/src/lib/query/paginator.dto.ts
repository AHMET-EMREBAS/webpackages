import { Exclude } from 'class-transformer';
import { Property } from '../property';

@Exclude()
export class PaginatorDto {
  @Property({ type: 'number', int: true, example: 20 }) take!: number;
  @Property({ type: 'number', int: true, example: 0 }) skip!: number;
  @Property({ type: 'boolean' }) withDeleted!: boolean;
}
