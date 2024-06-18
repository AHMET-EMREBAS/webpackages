import { Body, Param, Query } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create.dto';
import { UpdateUserProfileDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { UserProfile } from './entities';
import {
  OrderUserProfileDto,
  QueryUserProfileDto,
  SearchUserProfileDto,
} from './dto';
import { UserProfileService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'user-profile',
  pluralName: 'user-profiles',
  entity: UserProfile,
});

@C.Controller()
export class UserProfileController {
  constructor(private readonly service: UserProfileService) {}

  @C.Create()
  async saveOne(@Body() createUserProfileDto: CreateUserProfileDto) {
    return await this.service.saveOne(createUserProfileDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserProfileDto,
    @Query() query: QueryUserProfileDto,
    @Query() search: SearchUserProfileDto
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
    @Body() updateUserProfileDto: UpdateUserProfileDto
  ) {
    return await this.service.updateOneById(id, updateUserProfileDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
