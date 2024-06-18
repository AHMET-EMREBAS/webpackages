import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Notification } from '../entities';

@Exclude()
export class OrderNotificationDto extends CreateOrderDto<Notification>([
  'name',
]) {}
