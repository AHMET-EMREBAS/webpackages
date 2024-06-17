import { Exclude } from 'class-transformer';
import { Property } from '../property';

@Exclude()
export class PaginatorDto {
  @Property({ type: 'number', int: true }) take!: number;
  @Property({ type: 'number', int: true }) skip!: number;
  @Property({ type: 'boolean' }) withDeleted!: boolean;
}
