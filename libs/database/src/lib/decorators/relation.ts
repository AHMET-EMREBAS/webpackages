import { Type, applyDecorators } from '@nestjs/common';
import { JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { IDEntity } from '../base';

export type RelationOptions = {
  type: 'one' | 'many' | 'owner';
  target: Type | string;
  eager?: boolean;
  nullable?: boolean;
};

export function OneRelation<T extends IDEntity>(target: Type<T> | string) {
  const relationTarget = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    ManyToOne(relationTarget, (t) => t.id, { eager: true, nullable: true }),
    JoinColumn()
  );
}

export function ManyRelation<T extends IDEntity>(target: Type<T> | string) {
  const relationTarget = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    ManyToMany(relationTarget, (t) => t.id, { eager: true, nullable: true }),
    JoinTable()
  );
}

export function OwnerRelation(target: Type | string, options: RelationOptions) {
  const relationTarget = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    ManyToOne(relationTarget, (t) => t.id, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      eager: false,
      nullable: false,
      ...options,
    }),
    JoinColumn()
  );
}

export function Relation(options: RelationOptions) {
  const { type, target } = options;

  if (type === 'many') {
    return ManyRelation(target);
  } else if (type === 'one') {
    return OneRelation(target);
  } else if (type === 'owner') {
    return OwnerRelation(target, options);
  }
  throw new Error(`Relation type ${type} is not found!`);
}
