import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePriceDto {
  @Property({
    type: 'number',
    required: true,
    minimum: 0,
    moreThan: 'cost',
    example: 10.99,
  })
  price: number;
  @Property({ type: 'number', required: true, minimum: 0, example: 4.99 })
  cost: number;
  @Property({ type: 'date', required: true, example: '6/25/2024' })
  startDate: Date;
  @Property({
    type: 'date',
    required: true,
    moreThan: 'startDate',
    example: '10/20/2030',
  })
  endDate: Date;

  @Property({ type: 'number', required: true })
  sku: IDDto;

  @Property({ type: 'number', required: true })
  priceLevel: IDDto;
}
