import { Quantity } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryQuantityDto
  extends BaseQueryDto
  implements QueryDto<Quantity>
{
  @QueryProperty() quantity: string;
  @QueryProperty() alert: string;
  @QueryProperty() alertUnderQuantity: string;
  @QueryProperty() autoRepurchase: string;
  @QueryProperty() notSellLastOne: string;
  @QueryProperty() sku: string;
  @QueryProperty() store: string;
}
