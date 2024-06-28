import { ProductAttributeView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryProductAttributeDto
  extends BaseQueryDto
  implements QueryDto<ProductAttributeView>
{
  @QueryProperty() key: string;
  @QueryProperty() value: string;
  @QueryProperty() productId: string;
  @QueryProperty() productActive: string;
  @QueryProperty() productName: string;
  @QueryProperty() productUpc: string;
}
