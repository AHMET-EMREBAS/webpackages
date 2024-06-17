import { BaseEntity, BaseTimestampEntity } from '../database';
import { QueryDto } from './query-dto';
import { QueryProperty } from './query-property';

export class BaseQueryDto implements QueryDto<BaseTimestampEntity> {
  @QueryProperty() createdAt!: Date;
  @QueryProperty() updatedAt!: Date;
  @QueryProperty() deletedAt!: Date;
}
