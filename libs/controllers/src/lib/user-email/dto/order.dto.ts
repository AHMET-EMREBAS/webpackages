import { UserEmailView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderUserEmailDto extends CreateOrderDto<UserEmailView>([
  'email',
  'userUsername',
]) {}
