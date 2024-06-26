import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateQuantityDto {
  @Property({ type: 'number', minimum: 0, example: 13 }) quantity: number;
  @Property({ type: 'boolean', example: false }) alert: boolean;
  @Property({ type: 'number', example: 3 }) alertUnderQuantity: number;
  @Property({ type: 'boolean', example: false }) autoRepurchase: boolean;
  @Property({ type: 'boolean', example: false }) notSellLastOne: boolean;
}
