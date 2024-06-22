import { SerialNumberView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QuerySerialNumberDto
  extends BaseQueryDto
  implements QueryDto<SerialNumberView>
{
  @QueryProperty() serialNumber: string;
  @QueryProperty() inStock: string;
  @QueryProperty() generated: string;
  @QueryProperty() skuId: string;
  @QueryProperty() skuActive: string;
  @QueryProperty() skuSku: string;
  @QueryProperty() skuName: string;
}
