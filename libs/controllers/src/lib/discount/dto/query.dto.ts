import { Discount } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryDiscountDto
  extends BaseQueryDto
  implements QueryDto<Discount>
{
  @QueryProperty() fixedDiscount: string;
  @QueryProperty() percentDiscount: string;
  @QueryProperty() startDate: string;
  @QueryProperty() endDate: string;
  @QueryProperty() sku: string;
}
