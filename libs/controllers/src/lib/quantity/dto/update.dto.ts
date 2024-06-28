import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateQuantityDto {
  @Property({ type: 'number', minimum: 0, example: 13, tabIndex: 3 })
  quantity: number;
  @Property({ type: 'boolean', example: false }) alert: boolean;
  @Property({
    type: 'number',
    example: 3,
    tabIndex: 5,
    tableColumnClass: '!mw-8',
  })
  alertUnderQuantity: number;
  @Property({
    type: 'boolean',
    example: false,
    tabIndex: 5,
    tableColumnClass: '!mw-8',
  })
  autoRepurchase: boolean;
  @Property({
    type: 'boolean',
    example: false,
    tabIndex: 5,
    tableColumnClass: '!mw-8',
  })
  notSellLastOne: boolean;
}
