import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISupplier } from '@webpackages/models';

@Entity()
export class Supplier extends BaseEntity implements ISupplier {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
