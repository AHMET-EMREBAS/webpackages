import { SkuView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySkuDto extends BaseQueryDto implements QueryDto<SkuView> {
  @QueryProperty() name: string;
  @QueryProperty() description: string;
  @QueryProperty() sku: string;
  @QueryProperty() productId: string;
  @QueryProperty() productActive: string;
  @QueryProperty() productUpc: string;
}
