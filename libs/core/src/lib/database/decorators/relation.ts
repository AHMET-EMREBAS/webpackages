import { Type, applyDecorators } from '@nestjs/common';
import { JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { IDEntity } from '../base';

export type RelationOptions = {
  type: 'one' | 'many' | 'owner';
  target: Type;
};

export function OneRelation<T extends IDEntity>(target: Type<T>) {
  return applyDecorators(
    ManyToOne(
      () => target,
      (t) => t.id,
      { eager: true, nullable: true }
    ),
    JoinColumn()
  );
}

export function ManyRelation<T extends IDEntity>(target: Type<T>) {
  return applyDecorators(
    ManyToMany(
      () => target,
      (t) => t.id,
      { eager: true, nullable: true }
    ),
    JoinTable()
  );
}

export function OwnerRelation(target: Type) {
  return applyDecorators(
    ManyToOne(
      () => target,
      (t) => t.id
    ),
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
    return OwnerRelation(target);
  }
  throw new Error(`Relation type ${type} is not found!`);
}
