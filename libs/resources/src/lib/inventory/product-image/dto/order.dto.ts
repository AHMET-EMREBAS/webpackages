import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ProductImage } from '../entities';

@Exclude()
export class OrderProductImageDto extends CreateOrderDto<ProductImage>([
  'name',
]) {}
