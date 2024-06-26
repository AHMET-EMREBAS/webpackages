import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateOrderDto {
  @Property({ type: 'number', minimum: 0 }) unitPrice: number;
  @Property({ type: 'number', minimum: 0 }) subTotal: number;
  @Property({ type: 'number', minimum: 1 }) quantity: number;

  @Property({ type: 'number' })
  discount: IDDto;
}
