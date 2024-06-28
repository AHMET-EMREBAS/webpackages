import { ProductAttributeView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderProductAttributeDto extends CreateOrderDto<ProductAttributeView>(
  ['key', 'value', 'productName', 'productUpc']
) {}
