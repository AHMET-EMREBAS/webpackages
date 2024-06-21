import { applyDecorators } from '@nestjs/common';
import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Constructor, ID, RelationOptions } from '@webpackages/types';

export function EagerChildren<T extends ID>(target: Constructor<T> | string) {
  const rt = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    OneToMany(rt, (t) => t.id, { eager: true, nullable: true })
  );
}

export function OneRelation<T extends ID>(target: Constructor<T> | string) {
  const rt = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    ManyToOne(rt, (t) => t.id, { eager: true, nullable: true }),
    JoinColumn()
  );
}

export function ManyRelation<T extends ID>(target: Constructor<T> | string) {
  const rt = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    ManyToMany(rt, (t) => t.id, { eager: true, nullable: true }),
    JoinTable()
  );
}

export function OwnerRelation(target: Constructor | string) {
  const rt = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    ManyToOne(rt, (t) => t.id, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      eager: true,
      nullable: false,
    }),
    JoinColumn()
  );
}

export function SecureOwnerRelation(target: Constructor | string) {
  const rt = typeof target === 'string' ? target : () => target;
  return applyDecorators(
    ManyToOne(rt, (t) => t.id, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      eager: false,
      nullable: false,
    }),
    JoinColumn()
  );
}

export function Relation(options: Partial<RelationOptions>) {
  const { relationType: type, target } = options;

  if (!target) {
    throw new Error('Target is required!');
  }
  if (type === 'many') {
    return ManyRelation(target);
  } else if (type === 'one') {
    return OneRelation(target);
  } else if (type === 'owner') {
    return OwnerRelation(target);
  } else if (type === 'secure-owner') {
    return SecureOwnerRelation(target);
  } else if (type === 'eager-children') {
    return EagerChildren(target);
  }
  throw new Error(`Relation type ${type} is not found!`);
}
