import { QuantityView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchQuantityDto implements SearchDto<QuantityView> {
  @SearchProperty<QuantityView>([
    'quantity',
    'alert',
    'alertUnderQuantity',
    'autoRepurchase',
    'notSellLastOne',
    'skuName',
    'skuSku',
    'storeName',
  ])
  search: FindOptionsWhere<QuantityView>;
}
