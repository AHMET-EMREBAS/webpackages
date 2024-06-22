import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerAddressDto {
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    example: 'Street Addreess',
  })
  street: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    example: 'City',
  })
  city: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    example: 'State',
  })
  state: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    example: 'Zip',
  })
  zip: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
