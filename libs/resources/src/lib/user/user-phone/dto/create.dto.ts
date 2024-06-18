import { IDDto, ObjectIdProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CreatePhoneDto } from '../../../common';

@Exclude()
export class CreateUserPhoneDto extends CreatePhoneDto {
  @ObjectIdProperty() user: IDDto;
}
