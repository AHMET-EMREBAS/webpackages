import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IStore } from '@webpackages/models';

@Entity()
export class Store extends BaseEntity implements IStore {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
