import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUser } from '@webpackages/models';
import { AccessPolicy } from '@webpackages/types';
import { Department } from '../department';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ type: 'string', required: true, unique: true, format: 'email' })
  username: string;

  @Column({ type: 'string', required: true, format: 'password' })
  password: string;
  
  @Column({ type: 'object' }) permissions: AccessPolicy;

  @Relation({ relationType: 'one', target: Department }) department: Department;
}
