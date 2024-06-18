import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { PriceLevel } from '../entities';

@Exclude()
export class OrderPriceLevelDto extends CreateOrderDto<PriceLevel>(['name']) {}
