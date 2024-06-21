import { Notification } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderNotificationDto extends CreateOrderDto<Notification>([]) {}
