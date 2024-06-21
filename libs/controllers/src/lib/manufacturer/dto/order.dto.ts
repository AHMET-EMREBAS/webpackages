import { Manufacturer } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderManufacturerDto extends CreateOrderDto<Manufacturer>([
  'name',
]) {}