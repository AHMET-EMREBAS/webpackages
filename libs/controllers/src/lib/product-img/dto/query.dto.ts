import { ProductImgView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryProductImgDto
  extends BaseQueryDto
  implements QueryDto<ProductImgView>
{
  @QueryProperty() title: string;
  @QueryProperty() generatedName: string;
  @QueryProperty() name: string;
  @QueryProperty() upc: string;
}
