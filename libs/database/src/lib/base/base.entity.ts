import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Column } from '../decorators';
import { Property } from '@webpackages/property';
import { IBaseEntity, ID } from '@webpackages/types';

export class IDEntity implements ID {
  @Property({ type: 'number', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;
}

export class BaseEntity extends IDEntity implements IBaseEntity {
  @Property({ type: 'number', example: new Date().toString() })
  @CreateDateColumn()
  createdAt: Date;

  @Property({ type: 'number', example: new Date().toString() })
  @UpdateDateColumn()
  updatedAt: Date;

  @Property({ type: 'number', example: new Date().toString() })
  @DeleteDateColumn()
  deletedAt: Date;

  @Property({ type: 'boolean' })
  @Column({ type: 'boolean', defaultValue: true })
  active: boolean;
}
