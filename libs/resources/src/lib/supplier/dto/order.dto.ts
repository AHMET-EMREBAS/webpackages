import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Supplier } from '../entities';

@Exclude()
export class OrderSupplierDto extends CreateOrderDto<Supplier>(['name']) {}
