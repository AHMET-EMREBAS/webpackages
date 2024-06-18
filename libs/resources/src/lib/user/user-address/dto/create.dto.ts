import { Exclude } from 'class-transformer';
import { CreateAddressDto } from '../../../common';
import { IDDto, ObjectIdProperty } from '@webpackages/core';

@Exclude()
export class CreateUserAddressDto extends CreateAddressDto {
  @ObjectIdProperty()
  user: IDDto;
}
