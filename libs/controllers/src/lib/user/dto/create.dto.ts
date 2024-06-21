import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserDto {
  @Property({ type: 'string', format: 'email', required: true, unique: true })
  username: string;

  @Property({ type: 'string', format: 'email', required: true, unique: true })
  passwrod: string;

  @Property({ type: 'object', targetName: 'AccessPolicy' })
  permissions: any;

  @Property({ type: 'number' })
  department: IDDto;
}
