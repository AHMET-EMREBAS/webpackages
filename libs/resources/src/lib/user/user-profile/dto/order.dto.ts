import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { UserProfile } from '../entities';

@Exclude()
export class OrderUserProfileDto extends CreateOrderDto<UserProfile>([
  'name',
]) {}
