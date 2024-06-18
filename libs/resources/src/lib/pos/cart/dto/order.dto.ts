import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Cart } from '../entities';

@Exclude()
export class OrderCartDto extends CreateOrderDto<Cart>(['name']) {}
