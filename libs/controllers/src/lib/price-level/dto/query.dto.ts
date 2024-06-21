import { PriceLevel } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPriceLevelDto
  extends BaseQueryDto
  implements QueryDto<PriceLevel>
{
  @QueryProperty() name: string;
  @QueryProperty() taxrate: string;
}
