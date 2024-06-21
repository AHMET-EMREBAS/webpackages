import { AccessToken } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderAccessTokenDto extends CreateOrderDto<AccessToken>([]) {}
