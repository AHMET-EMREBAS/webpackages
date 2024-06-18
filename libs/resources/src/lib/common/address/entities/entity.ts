import { Entity, Column, BaseEntity } from '@webpackages/core';

@Entity()
export class Address extends BaseEntity {
  @Column({ type: 'string' }) street: string;
  @Column({ type: 'string' }) city: string;
  @Column({ type: 'string' }) state: string;
  @Column({ type: 'string' }) country: string;
  @Column({ type: 'string' }) zip: string;
}
