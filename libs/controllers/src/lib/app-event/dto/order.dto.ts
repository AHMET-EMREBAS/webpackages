import { AppEventView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderAppEventDto extends CreateOrderDto<AppEventView>([
  'name',
  'payload',
]) {}
