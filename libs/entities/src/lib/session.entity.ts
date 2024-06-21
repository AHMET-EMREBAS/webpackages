import { Relation } from '@webpackages/database';
import { BaseEntity, Entity } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Session extends BaseEntity {
  @Relation({ relationType: 'owner', target: User }) user: any;
}
