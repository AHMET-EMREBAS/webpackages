import { Exclude } from 'class-transformer';
import { CreateImgDto } from '../../../common';
import { IDDto, ObjectIdProperty } from '@webpackages/core';

@Exclude()
export class CreateCustomerImgDto extends CreateImgDto {
  @ObjectIdProperty() user: IDDto;
}
