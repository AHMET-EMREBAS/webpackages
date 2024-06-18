import {
  Entity,
  Column,
  BaseEntity,
  PasswordColumn,
  AccessPolicy,
} from '@webpackages/core';

@Entity()
export class Customer extends BaseEntity {
  @Column({ type: 'string' }) username: string;

  @PasswordColumn() password: string;

  @Column({ type: 'object' }) permissions: AccessPolicy<string>;
}
