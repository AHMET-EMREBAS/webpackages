import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { SerialNumber } from '../entities';

@Exclude()
export class OrderSerialNumberDto extends CreateOrderDto<SerialNumber>([
  'serialNumber',
  'inStock'
]) {}
