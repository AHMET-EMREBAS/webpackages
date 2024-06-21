import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IManufacturer } from '@webpackages/models';

@Entity()
export class Manufacturer extends BaseEntity implements IManufacturer {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
