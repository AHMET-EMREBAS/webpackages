import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Profile extends BaseEntity {
  @Column({ type: 'string' }) firstName: string;
  @Column({ type: 'string' }) middleName: string;
  @Column({ type: 'string' }) lastName: string;
  @Column({ type: 'string' }) occupation: string;
  @Column({ type: 'string' }) profileImg: string;
}
