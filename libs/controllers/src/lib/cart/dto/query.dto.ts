import { CartView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCartDto extends BaseQueryDto implements QueryDto<CartView> {
  @QueryProperty() complete: string;
  @QueryProperty() customerId: string;
  @QueryProperty() customerActive: string;
  @QueryProperty() customerUsername: string;
  @QueryProperty() userId: string;
  @QueryProperty() userActive: string;
  @QueryProperty() userUsername: string;
}
