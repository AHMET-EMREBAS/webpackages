import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IUserImg } from '@webpackages/models';

@Entity()
export class UserImg extends BaseEntity implements IUserImg {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
