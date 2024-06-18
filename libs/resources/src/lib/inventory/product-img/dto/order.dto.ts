import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { ProductImg } from '../entities';

@Exclude()
export class OrderProductImgDto extends CreateOrderDto<ProductImg>(['name']) {}
