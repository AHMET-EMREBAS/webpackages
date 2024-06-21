import { Img } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchImgDto implements SearchDto<Img> {
  @SearchProperty<Img>([])
  search: FindOptionsWhere<Img>;
}
