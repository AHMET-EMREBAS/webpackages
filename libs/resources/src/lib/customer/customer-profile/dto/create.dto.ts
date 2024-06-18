import { IDDto, ObjectIdProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CreateProfileDto } from '../../../common';

@Exclude()
export class CreateCustomerProfileDto extends CreateProfileDto {
  @ObjectIdProperty() user: IDDto;
}
