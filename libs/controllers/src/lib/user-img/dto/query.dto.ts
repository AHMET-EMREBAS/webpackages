import { UserImg } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryUserImgDto extends BaseQueryDto implements QueryDto<UserImg> {
  @QueryProperty() title: string;
  @QueryProperty() generatedName: string;
  @QueryProperty() user: string;
}
