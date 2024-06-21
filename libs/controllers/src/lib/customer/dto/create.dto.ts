import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerDto {
  @Property({ type: 'string', format: 'email', required: true, unique: true })
  username: string;

  @Property({ type: 'string', format: 'email', required: true, unique: true })
  passwrod: string;

  @Property({ type: 'object', targetName: 'AccessPolicy' })
  permissions: any;

  @Property({ type: 'number' })
  priceLevel: IDDto;
}
