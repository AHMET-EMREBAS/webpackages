import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateAddressDto {
  @Property({ type: 'string' })
  street: string;

  @Property({ type: 'string' })
  city: string;

  @Property({ type: 'string' })
  state: string;

  @Property({ type: 'string' })
  zip: string;
}
