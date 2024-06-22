import { EmailView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchEmailDto implements SearchDto<EmailView> {
  @SearchProperty<EmailView>(['email'])
  search: FindOptionsWhere<EmailView>;
}
