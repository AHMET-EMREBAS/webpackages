import { Sprint } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSprintDto extends CreateOrderDto<Sprint>([]) {}
