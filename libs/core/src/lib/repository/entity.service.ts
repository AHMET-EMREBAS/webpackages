import { ObjectLiteral, Repository } from 'typeorm';

export class EntityService<T extends ObjectLiteral> {
  constructor(protected readonly repo: Repository<T>) {}

  findAll() {}
  findOneById() {}
  create() {}
  update() {}
  delete() {}
}
