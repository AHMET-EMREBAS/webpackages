import { Session } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSessionDto extends CreateOrderDto<Session>(['user']) {}
