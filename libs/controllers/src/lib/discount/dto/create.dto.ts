import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateDiscountDto {
  @Property({ type: 'number', minimum: 0 })
  fixedDiscount: number;

  @Property({ type: 'number', minimum: 0 })
  percentDiscount: number;

  @Property({ type: 'date', required: true })
  startDate: Date;

  @Property({ type: 'date', required: true })
  endDate: Date;

  @Property({ type: 'number', required: true })
  undefined: IDDto;
}
