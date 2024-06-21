import { SerialNumber } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySerialNumberDto
  extends BaseQueryDto
  implements QueryDto<SerialNumber>
{
  @QueryProperty() serialNumber: string;
  @QueryProperty() inStock: string;
  @QueryProperty() generated: string;
  @QueryProperty() sku: string;
}
