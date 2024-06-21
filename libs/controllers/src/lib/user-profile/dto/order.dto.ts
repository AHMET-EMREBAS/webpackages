import { UserProfile } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderUserProfileDto extends CreateOrderDto<UserProfile>([]) {}
