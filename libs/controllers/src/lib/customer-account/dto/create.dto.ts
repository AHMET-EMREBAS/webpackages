import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerAccountDto {
  @Property({
    type: 'number',
    required: true,
    description: 'Sale subtotal',
    example: 400,
  })
  blance: number;

  @Property({ type: 'object', target: IDDto, required: true })
  customer: IDDto;

  @Property({ type: 'object', target: IDDto })
  priceLevel: IDDto;
}
