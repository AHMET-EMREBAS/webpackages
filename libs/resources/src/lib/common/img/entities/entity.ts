import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Img extends BaseEntity {
  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'string', required: true })
  url: string;
}
