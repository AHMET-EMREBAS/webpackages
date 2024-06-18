import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { SerialNumber } from '../entities';

@Exclude()
export class QuerySerialNumberDto
  extends BaseQueryDto
  implements QueryDto<SerialNumber>
{
  @QueryProperty() serialNumber: string;
  @QueryProperty() product: string;
  @QueryProperty() inStock: string;
}
