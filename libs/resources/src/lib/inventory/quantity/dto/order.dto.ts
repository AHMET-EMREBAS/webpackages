import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Quantity } from '../entities';

@Exclude()
export class OrderQuantityDto extends CreateOrderDto<Quantity>(['quantity']) {}
