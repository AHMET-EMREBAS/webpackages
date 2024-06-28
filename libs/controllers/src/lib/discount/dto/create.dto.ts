import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateDiscountDto {
  @Property({
    type: 'string',
    label: 'Discount Name',
    required: true,
    minLength: 3,
    maxLength: 100,
    example: 'April Discount',
  })
  name: string;
  @Property({ type: 'number', minimum: 0, example: 40 }) fixedDiscount: number;
  @Property({ type: 'number', minimum: 0 }) percentDiscount: number;
  @Property({ type: 'date', required: true, example: '6/28/2024' })
  startDate: Date;
  @Property({ type: 'date', required: true, example: '6/28/2024' })
  endDate: Date;

  @Property({ type: 'object', target: IDDto, required: true })
  sku: IDDto;

  @Property({ type: 'object', target: IDDto, required: true })
  priceLevel: IDDto;
}
