import {
  Entity,
  Column,
  BaseEntity,
  AccessPolicy,
  PasswordColumn,
} from '@webpackages/core';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'string' }) username: string;
  @PasswordColumn() password: string;
  @Column({ type: 'object' }) permissions: AccessPolicy<string>;
}
