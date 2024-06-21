import { UserImg } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserImgDto implements SearchDto<UserImg> {
  @SearchProperty<UserImg>(['title', 'generatedName', 'user'])
  search: FindOptionsWhere<UserImg>;
}
