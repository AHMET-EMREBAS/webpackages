import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { Manufacturer } from '../entities';

@Exclude()
export class QueryManufacturerDto
  extends BaseQueryDto
  implements QueryDto<Manufacturer>
{
  @QueryProperty() name!: string;
}
