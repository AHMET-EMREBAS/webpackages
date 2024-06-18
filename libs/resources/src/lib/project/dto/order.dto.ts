import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Project } from '../entities';

@Exclude()
export class OrderProjectDto extends CreateOrderDto<Project>(['name']) {}
