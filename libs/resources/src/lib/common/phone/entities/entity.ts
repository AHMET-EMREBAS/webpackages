import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Phone extends BaseEntity {
  @Column({ type: 'string', required: true }) phone: string;
}
