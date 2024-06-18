import { Body, Param, Query } from '@nestjs/common';
import { CreateUserImageDto } from './dto/create.dto';
import { UpdateUserImageDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { UserImage } from './entities';
import {
  OrderUserImageDto,
  QueryUserImageDto,
  SearchUserImageDto,
} from './dto';
import { UserImageService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'user-image',
  pluralName: 'user-images',
  entity: UserImage,
});

@C.Controller()
export class UserImageController {
  constructor(private readonly service: UserImageService) {}

  @C.Create()
  async saveOne(@Body() createUserImageDto: CreateUserImageDto) {
    return await this.service.saveOne(createUserImageDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserImageDto,
    @Query() query: QueryUserImageDto,
    @Query() search: SearchUserImageDto
  ) {
    return await this.service.findAll(paginator, order, query, search);
  }

  @C.FindOneById()
  async findOneById(@Param('id') id: number) {
    return await this.service.findOneById(id);
  }

  @C.Update()
  async updateOneById(
    @Param('id') id: number,
    @Body() updateUserImageDto: UpdateUserImageDto
  ) {
    return await this.service.updateOneById(id, updateUserImageDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
