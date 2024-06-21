import { Price } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderPriceDto extends CreateOrderDto<Price>([]) {}
