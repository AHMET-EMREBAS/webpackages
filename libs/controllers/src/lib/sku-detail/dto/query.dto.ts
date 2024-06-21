import { SkuDetail } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySkuDetailDto
  extends BaseQueryDto
  implements QueryDto<SkuDetail> {}
