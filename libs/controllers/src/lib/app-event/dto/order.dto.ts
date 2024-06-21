import { AppEvent } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderAppEventDto extends CreateOrderDto<AppEvent>([
  'name',
  'payload',
]) {}
