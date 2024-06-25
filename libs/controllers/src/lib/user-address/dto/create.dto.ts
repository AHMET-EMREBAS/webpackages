import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserAddressDto {
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    inputType: 'text',
    class: 'order-1 w-5/12',
    example: 'Street Addreess',
  })
  street: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    inputType: 'text',
    class: 'order-2 w-5/12',
    example: 'City',
  })
  city: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    inputType: 'text',
    class: 'order-4 w-5/12',
    example: 'State',
  })
  state: string;
  @Property({
    type: 'string',
    minLength: 1,
    maxLength: 100,
    required: true,
    inputType: 'text',
    class: 'order-5 w-5/12',
    example: 'Zip',
  })
  zip: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
