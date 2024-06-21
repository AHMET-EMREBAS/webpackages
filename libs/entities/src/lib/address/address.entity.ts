import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IAddress } from '@webpackages/models';

@Entity()
export class Address extends BaseEntity implements IAddress {
  @Column({ type: 'string', required: false, unique: false }) street: string;
  @Column({ type: 'string', required: false, unique: false }) city: string;
  @Column({ type: 'string', required: false, unique: false }) state: string;
  @Column({ type: 'string', required: false, unique: false }) zip: string;
}
