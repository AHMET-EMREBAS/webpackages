import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IClock } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Clock extends BaseEntity implements IClock {
  @Column({ type: 'date', required: true }) starDate: Date;
  @Column({ type: 'date' }) endDate: Date;

  @Relation({ relationType: 'owner', target: User }) user: User;
}
