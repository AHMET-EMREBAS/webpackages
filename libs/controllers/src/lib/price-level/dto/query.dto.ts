import { PriceLevelView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPriceLevelDto
  extends BaseQueryDto
  implements QueryDto<PriceLevelView>
{
  @QueryProperty() name: string;
  @QueryProperty() currency: string;
  @QueryProperty() taxrate: string;
}
