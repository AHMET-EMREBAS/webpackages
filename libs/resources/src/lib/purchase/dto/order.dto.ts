import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Purchase } from '../entities';

@Exclude()
export class OrderPurchaseDto extends CreateOrderDto<Purchase>(['name']) {}
