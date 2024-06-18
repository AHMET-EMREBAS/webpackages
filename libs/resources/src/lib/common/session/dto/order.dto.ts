import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Session } from '../entities';

@Exclude()
export class OrderSessionDto extends CreateOrderDto<Session>(['name']) {}
