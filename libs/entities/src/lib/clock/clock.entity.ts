import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IClock } from '@webpackages/models';

@Entity()
export class Clock extends BaseEntity implements IClock {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
