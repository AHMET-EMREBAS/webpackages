import { BaseQueryDto, QueryDto } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Cart } from '../entities';

@Exclude()
export class QueryCartDto extends BaseQueryDto implements QueryDto<Cart> {
  @Exclude() orders: unknown;
  @Exclude() user: unknown;
  @Exclude() customer: unknown;
}
