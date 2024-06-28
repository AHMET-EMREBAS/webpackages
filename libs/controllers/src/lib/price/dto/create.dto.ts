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
    class: 'order-3 w-4/12 grow',
    tabIndex: 3,
    textPrefix: '$',
  })
  price: number;
  @Property({
    type: 'number',
    required: true,
    minimum: 0,
    example: 4.99,
    class: 'order-4 w-4/12 grow',
    tabIndex: 4,
    textPrefix: '$',
  })
  cost: number;
  @Property({
    type: 'date',
    required: true,
    example: '6/27/2024, 10:12:35 PM',
    class: 'order-5 w-4/12 grow',
    tabIndex: 5,
  })
  startDate: Date;
  @Property({
    type: 'date',
    required: true,
    moreThan: 'startDate',
    example: '10/20/2030, 12:00:00 AM',
    class: 'order-6 w-4/12 grow',
    tabIndex: 6,
  })
  endDate: Date;

  @Property({ type: 'object', target: IDDto, required: true })
  sku: IDDto;

  @Property({ type: 'object', target: IDDto, required: true })
  priceLevel: IDDto;
}
