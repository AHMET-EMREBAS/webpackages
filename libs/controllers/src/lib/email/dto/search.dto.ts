import { Email } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchEmailDto implements SearchDto<Email> {
  @SearchProperty<Email>(['email'])
  search: FindOptionsWhere<Email>;
}
