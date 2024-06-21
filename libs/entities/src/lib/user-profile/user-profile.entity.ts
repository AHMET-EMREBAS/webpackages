import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserProfile } from '@webpackages/models';
import { User } from '../user';

@Entity()
export class UserProfile extends BaseEntity implements IUserProfile {
  @Column({ type: 'string', required: true, unique: false })
  firstName: string;

  @Column({ type: 'string', required: true, unique: false })
  lastName: string;

  @Column({ type: 'string', required: false, unique: false })
  middleName: string;

  @Relation({ relationType: 'owner', target: User })
  user: User;
}
