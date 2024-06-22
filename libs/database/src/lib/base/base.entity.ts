import {
  CreateDateColumn,
  DataSource,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  SelectQueryBuilder,
  UpdateDateColumn,
  ViewColumn,
} from 'typeorm';
import { Column } from '../decorators';
import { Property } from '@webpackages/property';
import {
  Arr,
  Constructor,
  BaseEntity as IBaseEntity,
  ID,
  Metadata,
} from '@webpackages/types';
import { names } from '@nx/devkit';

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
  @Column({ type: 'boolean', default: true })
  active: boolean;
}

export class BaseView implements BaseEntity {
  @Property({ type: 'number' })
  @ViewColumn()
  id: number;

  @Property({ type: 'number' })
  @ViewColumn()
  eid: number;

  @Property({ type: 'number' })
  @ViewColumn()
  createdAt: Date;

  @Property({ type: 'number' })
  @ViewColumn()
  updatedAt: Date;

  @Property({ type: 'number' })
  @ViewColumn()
  deletedAt: Date;

  @Property({ type: 'number' })
  @ViewColumn()
  active: boolean;
}

type RelationColumns<T = any> = [Constructor, Arr<keyof T>];

export function addRelationColumns<T>(
  relation: Constructor<T>,
  columns: Arr<keyof T>
): RelationColumns<T> {
  return [relation, columns];
}

export function baseQueryBuilder<T extends BaseEntity>(
  ds: DataSource,
  entity: Constructor<T>,
  metadata: Metadata
): SelectQueryBuilder<T> {
  const query = ds
    .createQueryBuilder()
    .createQueryBuilder()
    .select('ROW_NUMBER() OVER ()', 'id')
    .addSelect('main.id', 'eid')
    .addSelect('main.createdAt', 'createdAt')
    .addSelect('main.updatedAt', 'updatedAt')
    .addSelect('main.deletedAt', 'deletedAt')
    .addSelect('main.active', 'active');

  const { properties, relations } = metadata;

  if (properties) {
    for (const propertyName of Object.keys(properties)) {
      query.addSelect(`main.${propertyName}`, propertyName);
    }
  }

  if (relations) {
    for (const [propertyName, relationOptions] of Object.entries(relations)) {
      const alias = propertyName;
      const views = relationOptions.viewColumns;

      if (views && views.length > 0) {
        for (const view of views) {
          const colName = names(alias).propertyName + names(view).className;
          query.addSelect(`${alias}.${view}`, colName);
        }
      }

      {
        const colName = names(alias).propertyName + 'Id';
        query.addSelect(`${alias}.eid`, colName);
      }
      {
        const colName = names(alias).propertyName + names('active').className;
        query.addSelect(`${alias}.active`, colName);
      }
    }
  }

  query.from(entity, 'main');

  if (relations) {
    for (const [propertyName, relationOptions] of Object.entries(relations)) {
      const alias = propertyName;

      const entityId = names(alias).propertyName + 'Id';

      const con = `${alias}.eid = main.${entityId}`;

      query.leftJoin(relationOptions.targetName + 'View', alias, con);
    }
  }
  return query;
}
