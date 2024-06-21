import { Quantity } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderQuantityDto extends CreateOrderDto<Quantity>([]) {}
