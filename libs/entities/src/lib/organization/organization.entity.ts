import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IOrganization } from '@webpackages/models';

import { User } from '../user';

@Entity()
export class Organization extends BaseEntity implements IOrganization {
  @Column({ type: 'string', required: true, unique: true }) name: string;

  @Relation({ relationType: 'one', target: User }) manager: User;
}
