import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePurchaseDto {
  @Property({ type: 'date', required: true })
  orderDate: Date;

  @Property({ type: 'date', required: true })
  expectedShippingDate: Date;

  @Property({ type: 'date' })
  shippingDate: Date;

  @Property({ type: 'number', required: true })
  subTotal: number;

  @Property({ type: 'number', required: true })
  total: number;

  @Property({ type: 'string', inputType: 'textarea' })
  notes: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
