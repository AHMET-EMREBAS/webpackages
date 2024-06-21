import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IUserPhone } from '@webpackages/models';

@Entity()
export class UserPhone extends BaseEntity implements IUserPhone {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
