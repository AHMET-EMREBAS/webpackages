import { Supplier } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySupplierDto
  extends BaseQueryDto
  implements QueryDto<Supplier> {}
