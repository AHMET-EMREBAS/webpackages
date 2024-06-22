import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserDto {
  @Property({
    type: 'string',
    format: 'email',
    required: true,
    unique: true,
    description: 'Username',
    example: 'admin@domain.com',
  })
  username: string;
  @Property({
    type: 'string',
    format: 'email',
    required: true,
    unique: true,
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
