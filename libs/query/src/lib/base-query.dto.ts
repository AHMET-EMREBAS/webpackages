import { QueryProperty } from './query-property';

export class BaseQueryDto {
  @QueryProperty() active: boolean;
  @QueryProperty() createdAt: Date;
  @QueryProperty() updatedAt: Date;
  @QueryProperty() deletedAt: Date;
}
