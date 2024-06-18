import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class ProductImage extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}
