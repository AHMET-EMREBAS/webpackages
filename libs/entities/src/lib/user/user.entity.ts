import { BaseEntity, Column } from '@webpackages/database';
import { Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'string', required: true }) username: string;
  @Column({ type: 'string', required: true }) password: string;
}