import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateQuantityDto {
  @Property({ type: 'number', minimum: 0, required: true, example: 13 })
  quantity: number;
  @Property({ type: 'boolean', example: false }) alert: boolean;
  @Property({ type: 'number', example: 3 }) alertUnderQuantity: number;
  @Property({ type: 'boolean', example: false }) autoRepurchase: boolean;
  @Property({ type: 'boolean', example: false }) notSellLastOne: boolean;

  @Property({ type: 'number', required: true })
  sku: IDDto;

  @Property({ type: 'number', required: true })
  store: IDDto;
}
