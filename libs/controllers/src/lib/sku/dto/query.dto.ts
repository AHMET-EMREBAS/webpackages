import { Sku } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySkuDto extends BaseQueryDto implements QueryDto<Sku> {
  @QueryProperty() name: string;
  @QueryProperty() description: string;
  @QueryProperty() sku: string;
  @QueryProperty() product: string;
}
