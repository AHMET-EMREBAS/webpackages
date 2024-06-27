import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdatePurchaseDto {
  @Property({ type: 'date', example: '5/5/2024' }) orderDate: Date;
  @Property({ type: 'date', example: '5/13/2024' }) expectedShippingDate: Date;
  @Property({ type: 'date', example: '5/7/2024' }) shippingDate: Date;
  @Property({ type: 'number', example: 500 }) subTotal: number;
  @Property({ type: 'number', example: 500 }) total: number;
  @Property({
    type: 'string',
    inputType: 'textarea',
    example: 'Explain the purchase ',
  })
  notes: string;
}
