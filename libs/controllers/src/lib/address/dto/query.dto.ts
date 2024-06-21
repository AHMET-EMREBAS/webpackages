import { Address } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryAddressDto extends BaseQueryDto implements QueryDto<Address> {
  @QueryProperty() street: string;
  @QueryProperty() city: string;
  @QueryProperty() state: string;
  @QueryProperty() zip: string;
}
