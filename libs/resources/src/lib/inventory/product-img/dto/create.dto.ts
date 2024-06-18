import { IDDto, ObjectIdProperty } from '@webpackages/core';
import { Exclude } from 'class-transformer';
import { CreateImgDto } from '../../../common';

@Exclude()
export class CreateProductImgDto extends CreateImgDto {
  @ObjectIdProperty() product: IDDto;
}
