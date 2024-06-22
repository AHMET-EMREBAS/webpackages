import { CustomerAccountView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchCustomerAccountDto
  implements SearchDto<CustomerAccountView>
{
  @SearchProperty<CustomerAccountView>([
    'blance',
    'userUsername',
    'priceLevelName',
    'priceLevelTaxrate',
    'priceLevelCurrency',
  ])
  search: FindOptionsWhere<CustomerAccountView>;
}
