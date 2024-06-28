import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdatePriceDto {
  @Property({
    type: 'number',
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
    minimum: 0,
    example: 4.99,
    class: 'order-4 w-4/12 grow',
    tabIndex: 4,
    textPrefix: '$',
  })
  cost: number;
  @Property({
    type: 'date',
    example: '6/28/2024, 11:46:00 AM',
    class: 'order-5 w-4/12 grow',
    tabIndex: 5,
  })
  startDate: Date;
  @Property({
    type: 'date',
    moreThan: 'startDate',
    example: '10/20/2030, 12:00:00 AM',
    class: 'order-6 w-4/12 grow',
    tabIndex: 6,
  })
  endDate: Date;
}
