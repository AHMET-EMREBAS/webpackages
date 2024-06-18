import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Inbox } from '../entities';

@Exclude()
export class OrderInboxDto extends CreateOrderDto<Inbox>(['name']) {}
