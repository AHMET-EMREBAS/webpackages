import { Exclude } from 'class-transformer';
import { Property } from '@webpackages/property';
import { IDDto } from '@webpackages/database';

@Exclude()
export class UpdateUserDto {
  @Property({
    type: 'string',
    format: 'email',
    unique: true,
    description: 'Username',
    example: 'admin@domain.com',
  })
  username: string;
  @Property({
    type: 'string',
    format: 'password',
    description: 'Strong password',
    example: '!Password123.',
  })
  password: string;
  @Property({
    type: 'object',
    targetName: 'AccessPolicy',
    description: 'User permissions',
    example: {
      Admin: true,
      Product: { manage: true },
      User: { read: true, write: true, update: true, delete: true },
    },
  })
  permissions: AccessPolicy;

  @Property({ type: 'number' })
  department: IDDto;
}
