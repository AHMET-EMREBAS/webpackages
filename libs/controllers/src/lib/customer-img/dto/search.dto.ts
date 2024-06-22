import { CustomerImgView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerImgDto implements SearchDto<CustomerImgView> {
  @SearchProperty<CustomerImgView>([
    'title',
    'generatedName',
    'customerUsername',
  ])
  search: FindOptionsWhere<CustomerImgView>;
}
