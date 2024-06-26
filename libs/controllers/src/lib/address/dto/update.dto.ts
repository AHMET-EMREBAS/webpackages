import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateAddressDto {
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    inputType: 'text',
    class: 'order-1 w-5/12',
    example: 'Street Addreess',
  })
  street: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    inputType: 'text',
    class: 'order-2 w-5/12',
    example: 'City',
  })
  city: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    inputType: 'text',
    class: 'order-4 w-5/12',
    example: 'State',
  })
  state: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    inputType: 'text',
    class: 'order-5 w-5/12',
    example: 'Zip',
  })
  zip: string;
}
