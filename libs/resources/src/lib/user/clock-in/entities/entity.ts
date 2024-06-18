import { Entity, BaseEntity, Column } from '@webpackages/core';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ClockIn extends BaseEntity {
  @CreateDateColumn() startDate: Date;
  @UpdateDateColumn() endDate: Date;
  @Column({ type: 'number', update: false }) userId: number;
}
