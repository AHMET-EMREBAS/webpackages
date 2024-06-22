import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUser } from '@webpackages/models';
import { AccessPolicy } from '@webpackages/types';
import { Department } from '../department';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ type: 'string', required: true, unique: true }) username: string;
  @Column({ type: 'string', required: true, unique: true }) password: string;
  @Column({ type: 'object', required: false, unique: false })
  permissions: AccessPolicy;

  @Relation({ relationType: 'one', target: Department }) department: Department;
}
