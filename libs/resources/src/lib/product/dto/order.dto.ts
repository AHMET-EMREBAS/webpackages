import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Product } from '../entities';

@Exclude()
export class OrderProductDto extends CreateOrderDto<Product>(['name']) {}
