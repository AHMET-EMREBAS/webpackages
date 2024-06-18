import { IDDto, ObjectIdProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CreateEmailDto } from '../../../common';

@Exclude()
export class CreateUserEmailDto extends CreateEmailDto {
  @ObjectIdProperty() user: IDDto;
}
