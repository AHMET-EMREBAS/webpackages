import { SkuDetailView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySkuDetailDto
  extends BaseQueryDto
  implements QueryDto<SkuDetailView>
{
  @QueryProperty() color: string;
  @QueryProperty() height: string;
  @QueryProperty() width: string;
  @QueryProperty() weight: string;
  @QueryProperty() manual: string;
  @QueryProperty() make: string;
  @QueryProperty() model: string;
  @QueryProperty() notes: string;
  @QueryProperty() website: string;
  @QueryProperty() manufacturer: string;
  @QueryProperty() highlight: string;
  @QueryProperty() sku: string;
  @QueryProperty() name: string;
}
