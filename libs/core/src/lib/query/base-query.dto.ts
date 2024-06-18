import { BaseEntity } from '../database';
import { QueryDto } from './query-dto';
import { QueryProperty } from './query-property';

export class BaseQueryDto implements QueryDto<Omit<BaseEntity, 'id'>> {
  @QueryProperty() active: boolean;
  @QueryProperty() createdAt: Date;
  @QueryProperty() updatedAt: Date;
  @QueryProperty() deletedAt: Date;
}
