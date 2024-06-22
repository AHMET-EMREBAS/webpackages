import { ImgView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryImgDto extends BaseQueryDto implements QueryDto<ImgView> {
  @QueryProperty() title: string;
  @QueryProperty() generatedName: string;
}
