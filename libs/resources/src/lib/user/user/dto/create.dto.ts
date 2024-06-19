import { AccessPolicy, AccessPolicyDto, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateUserDto {
  @Property({
    type: 'string',
    format: 'email',
    required: true,
    example: 'user@gmail.com',
  })
  username: string;

  @Property({
    type: 'string',
    format: 'password',
    required: true,
    example: '!Password123',
  })
  password: string;

  @Property({
    type: 'object',
    target: AccessPolicyDto,
    required: true,
    example: {
      Admin: true,
      Category: {
        manage: true,
      },
      Product: {
        manage: true,
      },
    } as AccessPolicyDto,
  })
  permissions: AccessPolicyDto;
}
