import { Entity } from 'typeorm';
import { Column, BaseEntity } from '@webpackages/database';
import { IPriceLevel } from '@webpackages/models';

@Entity()
export class PriceLevel extends BaseEntity implements IPriceLevel {
  @Column({ type: 'string', required: true, unique: true })
  name: string;
}
