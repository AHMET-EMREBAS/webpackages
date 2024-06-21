import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IImg } from '@webpackages/models';

@Entity()
export class Img extends BaseEntity implements IImg {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
