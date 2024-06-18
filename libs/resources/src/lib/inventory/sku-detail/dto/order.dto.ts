import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { SkuDetail } from '../entities';

@Exclude()
export class OrderSkuDetailDto extends CreateOrderDto<SkuDetail>(['key', 'value']) {}
