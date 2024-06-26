import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdatePurchaseOrderDto {
  @Property({ type: 'number', example: 9.9 }) price: number;
  @Property({ type: 'number', isInt: true, minimum: 1, example: 30 })
  quantity: number;
  @Property({ type: 'number', minimum: 0, example: 297 }) subTotal: number;
  @Property({ type: 'number', minimum: 0, example: 297 }) total: number;
}
