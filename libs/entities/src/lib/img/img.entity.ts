import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IImg } from '@webpackages/models';

@Entity()
export class Img extends BaseEntity implements IImg {
  @Column({ type: 'string' }) title: string;
  @Column({ type: 'string' }) generatedName: string;
}
