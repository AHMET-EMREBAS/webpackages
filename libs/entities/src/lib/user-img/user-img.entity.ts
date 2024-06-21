import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IUserImg } from '@webpackages/models';
import { User } from '../user';

@Entity()
export class UserImg extends BaseEntity implements IUserImg {
  @Column({ type: 'string', required: false, unique: false })
  title: string;

  @Column({ type: 'string', required: false, unique: false })
  generatedName: string;

  @Relation({ relationType: 'owner', target: User })
  user: User;
}
