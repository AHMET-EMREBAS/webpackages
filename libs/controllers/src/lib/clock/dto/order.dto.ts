import { Clock } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderClockDto extends CreateOrderDto<Clock>([
  'starDate',
  'endDate',
  'user',
]) {}
