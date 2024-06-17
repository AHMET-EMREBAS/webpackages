import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Property } from '../../property';

export class IDEntity {
  @Property({ type: 'number', example: 1 })
  @PrimaryGeneratedColumn()
  id!: number;
}

export class BaseEntity extends IDEntity {
  @Property({ type: 'string', example: new Date().toString() })
  @CreateDateColumn()
  createdAt!: Date;

  @Property({ type: 'string', example: new Date().toString() })
  @UpdateDateColumn()
  updatedAt!: Date;

  @Property({ type: 'string', example: new Date().toString() })
  @DeleteDateColumn()
  deletedAt!: Date;
}
