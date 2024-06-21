import { PurchaseOrder } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPurchaseOrderDto
  extends BaseQueryDto
  implements QueryDto<PurchaseOrder> {}
