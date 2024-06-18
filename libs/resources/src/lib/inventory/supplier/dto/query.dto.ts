import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Supplier } from '../entities';

@Exclude()
export class QuerySupplierDto
  extends BaseQueryDto
  implements QueryDto<Supplier>
{
  @QueryProperty() name!: string;
}
