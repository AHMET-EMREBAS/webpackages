import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class IDEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}

export class BaseEntity extends IDEntity {
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
  @DeleteDateColumn() deletedAt!: Date;
}
