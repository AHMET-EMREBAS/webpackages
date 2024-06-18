import { AccessPolicy, AccessPolicyDto, Property } from '@webpackages/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateCustomerDto {
  @Property({ type: 'string', format: 'email', required: true })
  username: string;

  @Property({ type: 'string', format: 'password', required: true })
  password: string;

  @Property({
    type: 'object',
    target: AccessPolicyDto,
    required: true,
    noValidate: true,
  })
  permissions: AccessPolicy;
}
