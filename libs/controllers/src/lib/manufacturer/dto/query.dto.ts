import { ManufacturerView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryManufacturerDto
  extends BaseQueryDto
  implements QueryDto<ManufacturerView>
{
  @QueryProperty() name: string;
}
