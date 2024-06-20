import {
  Entity,
  Column,
  BaseEntity,
  PasswordColumn,
  AccessPolicyDto,
} from '@webpackages/core';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'string' }) username: string;
  @PasswordColumn() password: string;
  @Column({ type: 'object', target: AccessPolicyDto })
  permissions: AccessPolicyDto;
}
