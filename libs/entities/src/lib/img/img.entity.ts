import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IImg } from '@webpackages/models';

@Entity()
export class Img extends BaseEntity implements IImg {
  @Column({ type: 'string', required: false, unique: false }) title: string;
  @Column({ type: 'string', required: false, unique: false })
  generatedName: string;
}
