import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateDiscountDto {
  @Property({
    type: 'string',
    label: 'Discount Name',
    minLength: 3,
    maxLength: 100,
    example: 'April Discount',
  })
  name: string;
  @Property({ type: 'number', minimum: 0, example: 40 }) fixedDiscount: number;
  @Property({ type: 'number', minimum: 0 }) percentDiscount: number;
  @Property({ type: 'date', example: '6/26/2024' }) startDate: Date;
  @Property({ type: 'date', example: '6/26/2024' }) endDate: Date;
}
