import { UserImgView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserImgDto implements SearchDto<UserImgView> {
  @SearchProperty<UserImgView>(['title', 'generatedName', 'userUsername'])
  search: FindOptionsWhere<UserImgView>;
}
