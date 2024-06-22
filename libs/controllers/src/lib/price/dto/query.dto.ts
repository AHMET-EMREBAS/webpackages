import { PriceView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPriceDto extends BaseQueryDto implements QueryDto<PriceView> {
  @QueryProperty() price: string;
  @QueryProperty() cost: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() skuId: string;
  @QueryProperty() skuActive: string;
  @QueryProperty() priceLevelId: string;
  @QueryProperty() priceLevelActive: string;
}
