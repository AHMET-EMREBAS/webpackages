import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateDiscountDto {
  @Property({ type: 'number', minimum: 0, example: 40 }) fixedDiscount: number;
  @Property({ type: 'number', minimum: 0 }) percentDiscount: number;
  @Property({ type: 'date', required: true, example: '6/21/2024' })
  startDate: Date;
  @Property({ type: 'date', required: true, example: '6/21/2024' })
  endDate: Date;

  @Property({ type: 'number', required: true })
  sku: IDDto;

  @Property({ type: 'number', required: true })
  priceLevel: IDDto;
}
