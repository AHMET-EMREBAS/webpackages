import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Price } from '../entities';

@Exclude()
export class QueryPriceDto extends BaseQueryDto implements QueryDto<Price> {
  @QueryProperty() name!: string;
}
