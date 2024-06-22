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
  @QueryProperty() categoryId: string;
  @QueryProperty() categoryActive: string;
  @QueryProperty() categoryName: string;
  @QueryProperty() supplierId: string;
  @QueryProperty() supplierActive: string;
  @QueryProperty() supplierName: string;
}
