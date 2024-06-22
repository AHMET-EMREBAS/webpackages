import { QuantityView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchQuantityDto implements SearchDto<QuantityView> {
  @SearchProperty<Quantity>([
    'quantity',
    'alert',
    'alertUnderQuantity',
    'autoRepurchase',
    'notSellLastOne',
    'skuSku',
    'skuName',
    'storeName',
  ])
  search: FindOptionsWhere<Quantity>;
}
