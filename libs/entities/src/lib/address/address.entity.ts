import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IAddress } from '@webpackages/models';

@Entity()
export class Address extends BaseEntity implements IAddress {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
