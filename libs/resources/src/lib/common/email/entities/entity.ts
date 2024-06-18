import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Email extends BaseEntity {
  @Column({ type: 'string', required: true }) email: string;
}
