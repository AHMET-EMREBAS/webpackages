import { Entity, BaseEntity, Relation } from '@webpackages/core';
import { OneToMany } from 'typeorm';

@Entity()
export class Cart extends BaseEntity {
  @OneToMany('Order', (o) => (o as any).id, { eager: true }) orders: unknown;
  @Relation({ type: 'owner', target: 'User' }) user: unknown;
  @Relation({ type: 'owner', target: 'Customer' }) customer: unknown;
  
}
