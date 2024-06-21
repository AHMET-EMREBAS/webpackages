import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUser } from '@webpackages/models';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ type: 'string', required: true, unique: true })
  username: string;

  @Column({ type: 'string', required: true, unique: true })
  passwrod: string;

  @Column({ type: 'object', required: false, unique: false })
  permissions: object;
}
