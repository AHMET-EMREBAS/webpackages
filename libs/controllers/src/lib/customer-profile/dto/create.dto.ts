import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerProfileDto {
  @Property({ type: 'string', minLength: 3, maxLength: 100, required: true })
  firstName: string;

  @Property({ type: 'string', minLength: 3, maxLength: 100, required: true })
  lastName: string;

  @Property({ type: 'string', minLength: 3, maxLength: 100 })
  middleName: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
