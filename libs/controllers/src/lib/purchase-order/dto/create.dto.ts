import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePurchaseOrderDto {
  @Property({ type: 'number', required: true, example: 9.9 }) price: number;
  @Property({
    type: 'number',
    isInt: true,
    required: true,
    minimum: 1,
    example: 30,
  })
  quantity: number;
  @Property({ type: 'number', required: true, minimum: 0, example: 297 })
  subTotal: number;
  @Property({ type: 'number', required: true, minimum: 0, example: 297 })
  total: number;

  @Property({ type: 'number', required: true })
  purchase: IDDto;

  @Property({ type: 'number', required: true })
  sku: IDDto;
}
