import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Cart } from '../entities';

@Exclude()
export class QueryCartDto extends BaseQueryDto implements QueryDto<Cart> {
  @QueryProperty() name!: string;
}
