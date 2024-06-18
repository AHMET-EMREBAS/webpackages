import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Manufacturer } from '../entities';

@Exclude()
export class OrderManufacturerDto extends CreateOrderDto<Manufacturer>([
  'name',
]) {}
