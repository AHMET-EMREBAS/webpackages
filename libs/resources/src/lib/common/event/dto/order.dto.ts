import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Event } from '../entities';

@Exclude()
export class OrderEventDto extends CreateOrderDto<Event>(['name']) {}
