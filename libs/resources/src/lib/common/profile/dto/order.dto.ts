import { CreateOrderDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Profile } from '../entities';

@Exclude()
export class OrderProfileDto extends CreateOrderDto<Profile>([
  'firstName',
  'middleName',
  'lastName',
  'occupation',
  'profileImg',
]) {}
