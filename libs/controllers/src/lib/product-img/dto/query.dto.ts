import { ProductImg } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryProductImgDto
  extends BaseQueryDto
  implements QueryDto<ProductImg>
{
  @QueryProperty() title: string;
  @QueryProperty() generatedName: string;
  @QueryProperty() product: string;
}
