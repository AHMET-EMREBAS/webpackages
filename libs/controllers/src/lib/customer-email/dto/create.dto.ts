import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerEmailDto {
  @Property({ type: 'string', format: 'email', required: true })
  email: string;

  @Property({ type: 'number', required: true })
  user: IDDto;
}
