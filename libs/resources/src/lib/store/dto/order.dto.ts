import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Store } from '../entities';

@Exclude()
export class OrderStoreDto extends CreateOrderDto<Store>(['name']) {}
