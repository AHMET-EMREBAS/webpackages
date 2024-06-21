import { Address } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchAddressDto implements SearchDto<Address> {
  @SearchProperty<Address>([])
  search: FindOptionsWhere<Address>;
}
