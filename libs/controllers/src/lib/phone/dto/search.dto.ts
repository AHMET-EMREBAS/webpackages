import { Phone } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchPhoneDto implements SearchDto<Phone> {
  @SearchProperty<Phone>([])
  search: FindOptionsWhere<Phone>;
}
