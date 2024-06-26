import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { IPhone } from '@webpackages/models';

@Entity()
export class Phone extends BaseEntity implements IPhone {
  @Column({ type: 'string', required: true, format: 'phone' }) phone: string;
}
