import { Entity, BaseEntity, Column } from '@webpackages/core';

@Entity()
export class Session extends BaseEntity {
  @Column({ type: 'string', unique: true}) deviceId: string;
}
