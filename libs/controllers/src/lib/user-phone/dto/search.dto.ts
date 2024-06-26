import { UserPhoneView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchUserPhoneDto implements SearchDto<UserPhoneView> {
  @SearchProperty<UserPhoneView>(['phone'])
  search: FindOptionsWhere<UserPhoneView>;
}
