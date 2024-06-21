import { Store } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderStoreDto extends CreateOrderDto<Store>(['name']) {}
