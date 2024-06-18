import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Price } from '../entities';

@Exclude()
export class OrderPriceDto extends CreateOrderDto<Price>(['price', 'cost']) {}
