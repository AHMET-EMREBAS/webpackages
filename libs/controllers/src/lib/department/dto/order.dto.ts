import { DepartmentView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderDepartmentDto extends CreateOrderDto<DepartmentView>([
  'name',
]) {}
