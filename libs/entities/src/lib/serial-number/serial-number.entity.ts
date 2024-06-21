import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { ISerialNumber } from '@webpackages/models';

@Entity()
export class SerialNumber extends BaseEntity implements ISerialNumber {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
