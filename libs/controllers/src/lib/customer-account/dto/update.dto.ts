import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateCustomerAccountDto {
  @Property({ type: 'number', description: 'Sale subtotal', example: 400 })
  blance: number;

  @Property({ type: 'object', target: IDDto })
  customer: IDDto;

  @Property({ type: 'object', target: IDDto })
  priceLevel: IDDto;
}
