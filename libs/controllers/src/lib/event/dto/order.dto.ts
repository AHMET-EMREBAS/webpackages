import { Event } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderEventDto extends CreateOrderDto<Event>(['name', 'payload']) {}
