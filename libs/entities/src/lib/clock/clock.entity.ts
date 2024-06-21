import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IClock } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Clock extends BaseEntity implements IClock {
  @Column({ type: 'date', required: true, unique: false })
  starDate: Date;

  @Column({ type: 'date', required: false, unique: false })
  endDate: Date;

  @Relation({ relationType: 'owner', target: User })
  user: User;
}
