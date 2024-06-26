import { CustomerAccountView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderCustomerAccountDto extends CreateOrderDto<CustomerAccountView>(
  [
    'blance',
    'customerUsername',
    'priceLevelName',
    'priceLevelTaxrate',
    'priceLevelCurrency',
  ]
) {}
