import { Type } from '@nestjs/common';
import { EntityManager, ObjectLiteral, Repository } from 'typeorm';

export class EntityRepository<T extends ObjectLiteral> extends Repository<T> {
  constructor(target: Type<T>, manager: EntityManager) {
    super(target, manager);
  }
}
