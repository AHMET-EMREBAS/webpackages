import { Cart } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryCartDto extends BaseQueryDto implements QueryDto<Cart> {
  @QueryProperty() complete: string;
  @QueryProperty() customer: string;
  @QueryProperty() user: string;
}
