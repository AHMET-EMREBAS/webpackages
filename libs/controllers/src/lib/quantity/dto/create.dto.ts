import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateQuantityDto {
  @Property({
    type: 'number',
    minimum: 0,
    required: true,
    example: 13,
    tabIndex: 3,
  })
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

  @Property({ type: 'object', target: IDDto, required: true })
  sku: IDDto;

  @Property({ type: 'object', target: IDDto, required: true })
  store: IDDto;
}
