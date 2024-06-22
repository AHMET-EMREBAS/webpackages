import { ProductView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryProductDto
  extends BaseQueryDto
  implements QueryDto<ProductView>
{
  @QueryProperty() name: string;
  @QueryProperty() description: string;
  @QueryProperty() upc: string;
  @QueryProperty() name: string;
}
