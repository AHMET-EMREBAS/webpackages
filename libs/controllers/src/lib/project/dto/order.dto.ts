import { Project } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderProjectDto extends CreateOrderDto<Project>(['name']) {}
