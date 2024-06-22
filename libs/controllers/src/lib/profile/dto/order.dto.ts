import { ProfileView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderProfileDto extends CreateOrderDto<ProfileView>([
  'firstName',
  'lastName',
  'middleName',
]) {}
