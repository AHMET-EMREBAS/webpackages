import { Exclude } from 'class-transformer';
import { CreateImgDto } from '../../../common';
import { IDDto, ObjectIdProperty } from '@webpackages/core';

@Exclude()
export class CreateUserImgDto extends CreateImgDto {
  @ObjectIdProperty() user: IDDto;
}
