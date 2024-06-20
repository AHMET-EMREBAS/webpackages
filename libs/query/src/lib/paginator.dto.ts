import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class PaginatorDto {
  @Property({ type: 'number', isInt: true, example: 20 }) take?: number;
  @Property({ type: 'number', isInt: true, example: 0 }) skip?: number;
  @Property({ type: 'boolean' }) withDeleted?: boolean;
}
