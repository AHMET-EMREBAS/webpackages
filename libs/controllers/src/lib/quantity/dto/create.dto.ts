import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateQuantityDto {
  @Property({ type: 'number', minimum: 0, required: true })
  quantity: number;

  @Property({ type: 'boolean' })
  alert: boolean;

  @Property({ type: 'number' })
  alertUnderQuantity: number;

  @Property({ type: 'boolean' })
  autoRepurchase: boolean;

  @Property({ type: 'boolean' })
  notSellLastOne: boolean;
}
