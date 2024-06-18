import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Message } from '../entities';

@Exclude()
export class OrderMessageDto extends CreateOrderDto<Message>(['name']) {}
