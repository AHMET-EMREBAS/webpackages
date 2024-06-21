import { SkuDetail } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSkuDetailDto extends CreateOrderDto<SkuDetail>([
  'color',
  'height',
  'width',
  'weight',
  'manual',
]) {}
