import { Message } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderMessageDto extends CreateOrderDto<Message>([
  'message',
  'readDate',
  'user',
  'to',
]) {}
