import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserAddress } from '@webpackages/models';

@Entity()
export class UserAddress extends BaseEntity implements IUserAddress {
  @Column({ type: 'string', required: true }) street: string;
  @Column({ type: 'string', required: true }) city: string;
  @Column({ type: 'string', required: true }) state: string;
  @Column({ type: 'string', required: true }) zip: string;
}
