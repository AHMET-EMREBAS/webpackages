import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IUserAddress } from '@webpackages/models';

@Entity()
export class UserAddress extends BaseEntity implements IUserAddress {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
