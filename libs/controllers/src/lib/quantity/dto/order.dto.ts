import { QuantityView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderQuantityDto extends CreateOrderDto<QuantityView>([
  'quantity',
  'alert',
  'alertUnderQuantity',
  'autoRepurchase',
  'notSellLastOne',
  'skuName',
  'skuSku',
  'storeName',
]) {}
