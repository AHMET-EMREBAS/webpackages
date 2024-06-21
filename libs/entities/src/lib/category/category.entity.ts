import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ICategory } from '@webpackages/models';

@Entity()
export class Category extends BaseEntity implements ICategory {
  @Column({ type: 'string', required: true, unique: true }) name: string;
}
