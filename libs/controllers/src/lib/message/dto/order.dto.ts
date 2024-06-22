import { MessageView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderMessageDto extends CreateOrderDto<MessageView>([
  'message',
  'readDate',
  ,
]) {}
