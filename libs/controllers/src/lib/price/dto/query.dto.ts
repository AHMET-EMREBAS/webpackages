import { Price } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPriceDto extends BaseQueryDto implements QueryDto<Price> {
  @QueryProperty() price: string;
  @QueryProperty() cost: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() sku: string;
  @QueryProperty() priceLevel: string;
}
