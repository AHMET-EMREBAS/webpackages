import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePurchaseOrderDto {
  @Property({ type: 'number', required: true })
  price: number;

  @Property({ type: 'number', minimum: 1 })
  quantity: number;

  @Property({ type: 'number', minimum: 0 })
  subTotal: number;

  @Property({ type: 'number', minimum: 0 })
  total: number;
}
