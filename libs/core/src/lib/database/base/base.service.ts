/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeepPartial,
  FindOptionsOrder,
  FindOptionsWhere,
  ILike,
  Repository,
} from 'typeorm';

import {
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { OrderDto, PaginatorDto, QueryDto, SearchDto } from '../../query';
import { RelationDto, UnsetRelationDto } from './relation.dto';

export class BaseEntityService<T extends BaseEntity> {
  protected readonly __md = this.repo.metadata;

  protected readonly __entityName = this.__md.targetName;
  protected readonly __columns = this.__md.columns.map((e) => e.propertyName);
  protected readonly __relations = this.__md.relations.map(
    (e) => e.propertyName
  );

  protected readonly __uniques = this.__md.uniques.map(
    (e) => e.columns[0].propertyName
  );

  constructor(protected repo: Repository<T>) {}

  protected async isActive(id: number) {
    const found = await this.repo.findOneBy({ id } as FindOptionsWhere<T>);
    if (found?.active) {
      return found;
    }
    throw new UnprocessableEntityException(
      `The entity is not active any more!`
    );
  }

  async findOne(where?: Partial<QueryDto<T>>) {
    return this.repo.findOne({ where: where as FindOptionsWhere<T> });
  }

  /**
   *
   * @param paginator
   * @param order
   * @param query
   * @param search
   * @returns
   */
  async findAll(
    paginator?: PaginatorDto,
    order?: OrderDto<T>,
    query?: Partial<QueryDto<T>>,
    search?: SearchDto<T>
  ) {
    const where = search?.search
      ? (search.search as FindOptionsWhere<T>)
      : (query as FindOptionsWhere<T>);

    const { orderDir, orderBy } = order || {};

    const orderValue =
      orderDir && orderBy
        ? ({ [orderBy]: orderDir } as FindOptionsOrder<T>)
        : ({ id: 'ASC' } as FindOptionsOrder<T>);

    let foundItems: T[] | null;

    try {
      foundItems = await this.repo.find({
        ...paginator,
        where,
        order: orderValue,
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }

    return foundItems;
  }

  /**
   *
   * @param id
   * @returns
   */
  async findOneById(id: number) {
    let result: T | null;

    try {
      result = await this.repo.findOneBy({ id: id } as FindOptionsWhere<T>);
    } catch (err) {
      throw new InternalServerErrorException();
    }

    if (result) {
      return result;
    }

    throw new NotFoundException();
  }

  async count(query: QueryDto<T>, search: SearchDto<T>) {
    const where = search.search
      ? (search.search as FindOptionsWhere<T>)
      : (query as FindOptionsWhere<T>);

    let result: { count: number };

    try {
      result = {
        count: await this.repo.count({ where }),
      };
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }

    return result;
  }

  private async __isUnqiue(entity: DeepPartial<T>) {
    for (const u of this.__uniques) {
      const newValue = (entity as any)[u];

      let foundItem: T | null;

      if (newValue) {
        try {
          foundItem = await this.repo.findOneBy({
            [u]: ILike(newValue),
          } as any);
        } catch (err) {
          continue;
        }

        if (foundItem) {
          throw new UnprocessableEntityException({
            errors: [
              {
                property: u,
                constraints: {
                  isUnique: `${u} must be unique!`,
                },
              },
            ],
          });
        }
      }
    }
  }

  async saveOne(entity: DeepPartial<T>) {
    await this.__isUnqiue(entity);
    let saved: T;
    try {
      saved = await this.repo.save({ ...entity });
      return await this.findOneById(saved.id);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
  }

  async saveMany(entities: DeepPartial<T>[]) {
    try {
      return await this.repo.save(entities);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
  }

  async deleteById(id: number): Promise<T> {
    const found = await this.findOneById(id);

    try {
      await this.repo.delete(found.id);
      return found;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
  }

  async updateOneById(id: number, entity: DeepPartial<T>): Promise<T> {
    const found = await this.isActive(id);

    const updatedRecords = Object.entries(entity)
      .map(([key, value]) => {
        if ((found as any)[key] === value) {
          return null;
        }
        return { [key]: value };
      })
      .filter((e) => e);

    console.table(updatedRecords);
    const updated =
      updatedRecords.length > 0
        ? updatedRecords?.reduce((p, c) => ({ ...p, ...c }))
        : null;

    console.table(updated);

    if (updated) {
      try {
        return await this.saveOne({ ...updated, id } as any);
      } catch (err) {
        console.error(err);
        throw new InternalServerErrorException();
      }
    }

    return found;
  }

  async addRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;

    await this.isActive(id);

    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .add(relationId);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
    return await this.findOneById(id);
  }

  async removeRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    await this.isActive(id);
    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .remove(relationId);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }

    return await this.findOneById(id);
  }

  async setRelation(relationDto: RelationDto<T>) {
    const { id, relationId, relationName } = relationDto;
    await this.isActive(id);
    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(relationId);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
    return await this.findOneById(id);
  }

  async unsetRelation(relationDto: UnsetRelationDto<T>) {
    const { id, relationName } = relationDto;
    await this.isActive(id);
    try {
      await this.repo
        .createQueryBuilder()
        .relation(relationName)
        .of(id)
        .set(null);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
    return await this.findOneById(id);
  }

  createQueryBuilder(alias?: string) {
    return this.repo.createQueryBuilder(alias);
  }
}
