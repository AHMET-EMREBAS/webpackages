import { Quantity } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryQuantityDto
  extends BaseQueryDto
  implements QueryDto<Quantity> {}
