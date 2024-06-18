import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class AccessToken extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
  
  @Column({ type: 'string' })
  token: string;
}
