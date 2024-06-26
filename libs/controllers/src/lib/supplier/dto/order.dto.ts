import { SupplierView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSupplierDto extends CreateOrderDto<SupplierView>(['name']) {}
