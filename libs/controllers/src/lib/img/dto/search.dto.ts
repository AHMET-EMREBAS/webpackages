import { ImgView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchImgDto implements SearchDto<ImgView> {
  @SearchProperty<ImgView>(['title', 'generatedName'])
  search: FindOptionsWhere<ImgView>;
}
