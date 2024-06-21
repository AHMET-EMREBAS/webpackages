import { Entity } from 'typeorm';
import { Column, BaseEntity, Relation } from '@webpackages/database';
import { ISkuDetail } from '@webpackages/models';

@Entity()
export class SkuDetail extends BaseEntity implements ISkuDetail {
  @Column({ type: 'string', required: false, unique: false })
  color: string;

  @Column({ type: 'string', required: false, unique: false })
  height: string;

  @Column({ type: 'string', required: false, unique: false })
  width: string;

  @Column({ type: 'string', required: false, unique: false })
  weight: string;

  @Column({ type: 'string', required: false, unique: false })
  manual: string;
}
