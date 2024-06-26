import { SessionView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderSessionDto extends CreateOrderDto<SessionView>([
  'scope',
  'deviceId',
  'token',
  'userUsername',
]) {}
