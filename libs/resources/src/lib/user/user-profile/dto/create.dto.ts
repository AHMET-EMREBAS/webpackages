import { IDDto, ObjectIdProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CreateProfileDto } from '../../../common';

@Exclude()
export class CreateUserProfileDto extends CreateProfileDto {
  @ObjectIdProperty() user: IDDto;
}
