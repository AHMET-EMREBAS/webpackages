import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Store } from '../entities';

@Exclude()
export class QueryStoreDto extends BaseQueryDto implements QueryDto<Store> {
  @QueryProperty() name!: string;
}
