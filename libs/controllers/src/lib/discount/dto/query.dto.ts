import { DiscountView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryDiscountDto
  extends BaseQueryDto
  implements QueryDto<DiscountView>
{
  @QueryProperty() name: string;
  @QueryProperty() fixedDiscount: string;
  @QueryProperty() percentDiscount: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() skuId: string;
  @QueryProperty() skuActive: string;
  @QueryProperty() skuName: string;
  @QueryProperty() skuSku: string;
  @QueryProperty() priceLevelId: string;
  @QueryProperty() priceLevelActive: string;
  @QueryProperty() priceLevelName: string;
  @QueryProperty() priceLevelCurrency: string;
  @QueryProperty() priceLevelTaxrate: string;
}
