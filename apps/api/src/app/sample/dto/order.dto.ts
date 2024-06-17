import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Sample } from '../entities';

@Exclude()
export class OrderSampleDto extends CreateOrderDto<Sample>(['name']) {}
