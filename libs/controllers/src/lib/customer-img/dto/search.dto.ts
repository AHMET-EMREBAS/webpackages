import { CustomerImg } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerImgDto implements SearchDto<CustomerImg> {
  @SearchProperty<CustomerImg>([])
  search: FindOptionsWhere<CustomerImg>;
}
