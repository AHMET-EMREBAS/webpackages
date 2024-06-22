import { SkuDetailView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSkuDetailDto extends CreateOrderDto<SkuDetailView>([
  'color',
  'height',
  'width',
  'weight',
  'manual',
  'make',
  'model',
  'notes',
  'website',
  'manufacturer',
  'highlight',
  'sku',
  'name',
]) {}
