import { DiscountView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryDiscountDto
  extends BaseQueryDto
  implements QueryDto<DiscountView>
{
  @QueryProperty() fixedDiscount: string;
  @QueryProperty() percentDiscount: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() name: string;
  @QueryProperty() sku: string;
  @QueryProperty() name: string;
  @QueryProperty() currency: string;
  @QueryProperty() taxrate: string;
}
