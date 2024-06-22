import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePurchaseDto {
  @Property({ type: 'date', required: true, example: '5/5/2024' })
  orderDate: Date;
  @Property({ type: 'date', required: true, example: '5/13/2024' })
  expectedShippingDate: Date;
  @Property({ type: 'date', example: '5/7/2024' }) shippingDate: Date;
  @Property({ type: 'number', required: true, example: 500 }) subTotal: number;
  @Property({ type: 'number', required: true, example: 500 }) total: number;
  @Property({
    type: 'string',
    inputType: 'textarea',
    example: 'Explain the purchase ',
  })
  notes: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
