import { QuantityView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryQuantityDto
  extends BaseQueryDto
  implements QueryDto<QuantityView>
{
  @QueryProperty() quantity: string;
  @QueryProperty() alert: string;
  @QueryProperty() alertUnderQuantity: string;
  @QueryProperty() autoRepurchase: string;
  @QueryProperty() notSellLastOne: string;
  @QueryProperty() sku: string;
  @QueryProperty() name: string;
  @QueryProperty() name: string;
}
