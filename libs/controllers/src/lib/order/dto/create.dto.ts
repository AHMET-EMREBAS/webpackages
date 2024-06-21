import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateOrderDto {
  @Property({ type: 'number', required: true, minimum: 0 })
  unitPrice: number;

  @Property({ type: 'number', required: true, minimum: 0 })
  subTotal: number;

  @Property({ type: 'number', minimum: 1 })
  quantity: number;
}
