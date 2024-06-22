import { StoreView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryStoreDto extends BaseQueryDto implements QueryDto<StoreView> {
  @QueryProperty() name: string;
  @QueryProperty() managerId: string;
  @QueryProperty() managerActive: string;
  @QueryProperty() managerUsername: string;
}
