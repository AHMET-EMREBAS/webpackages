import { Store } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryStoreDto extends BaseQueryDto implements QueryDto<Store> {
  @QueryProperty() name: string;
}
