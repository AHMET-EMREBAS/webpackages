import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdatePriceDto {
  @Property({ type: 'number', minimum: 0, moreThan: 'cost', example: 10.99 })
  price: number;
  @Property({ type: 'number', minimum: 0, example: 4.99 }) cost: number;
  @Property({ type: 'date', example: '6/26/2024' }) startDate: Date;
  @Property({ type: 'date', moreThan: 'startDate', example: '10/20/2030' })
  endDate: Date;
}
