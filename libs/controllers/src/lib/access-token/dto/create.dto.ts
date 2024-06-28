import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';
import { AccessPolicy } from '@webpackages/types';

@Exclude()
export class CreateAccessTokenDto {
  @Property({
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 100,
    inputType: 'text',
    example: 'Token name',
  })
  name: string;
  @Property({
    type: 'string',
    label: 'Token salt',
    minLength: 10,
    maxLength: 100,
    inputType: 'text',
    format: 'token',
    update: false,
    example: 'wiqouer923784123uis918374jw892y43',
  })
  token: string;
  @Property({
    type: 'object',
    targetName: 'AccessPolicy',
    description: 'User permissions',
    example: {
      Admin: true,
      Product: { manage: true },
      User: { read: true, write: true, update: true, delete: true },
    },
    update: false,
  })
  permissions: AccessPolicy;
}
