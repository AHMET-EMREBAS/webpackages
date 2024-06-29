import { SerialNumberView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySerialNumberDto
  extends BaseQueryDto
  implements QueryDto<SerialNumberView>
{
  @QueryProperty() required: string;
  @QueryProperty() type: string;
  @QueryProperty() prefix: string;
  @QueryProperty() suffix: string;
  @QueryProperty() serialNumber: string;
  @QueryProperty() productId: string;
  @QueryProperty() productActive: string;
  @QueryProperty() productName: string;
  @QueryProperty() productUpc: string;
}
