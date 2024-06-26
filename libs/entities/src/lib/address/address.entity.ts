import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IAddress } from '@webpackages/models';

@Entity()
export class Address extends BaseEntity implements IAddress {
  @Column({ type: 'string', required: true }) street: string;
  @Column({ type: 'string', required: true }) city: string;
  @Column({ type: 'string', required: true }) state: string;
  @Column({ type: 'string', required: true }) zip: string;
}
