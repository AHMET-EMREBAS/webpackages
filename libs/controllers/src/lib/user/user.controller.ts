import { Body, Param, Query } from '@nestjs/common';
import { PaginatorDto } from '@webpackages/query';
import {
  User,
  CreateUserDto,
  UpdateUserDto,
  OrderUserDto,
  QueryUserDto,
  SearchUserDto,
} from '@webpackges/entities';
import { UserService } from './user.service';
import { ResourceController } from '@webpackages/controller-builder';

export const UserResource = new ResourceController({
  singularName: 'user',
  pluralName: 'users',
  entity: User,
});

@UserResource.Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @UserResource.Create()
  async saveOne(@Body() createUserDto: CreateUserDto) {
    return await this.service.saveOne(createUserDto);
  }

  @UserResource.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserDto,
    @Query() query: QueryUserDto,
    @Query() search: SearchUserDto
  ) {
    return await this.service.findAll(paginator, order, query, search);
  }

  @UserResource.FindOneById()
  async findOneById(@Param('id') id: number) {
    return await this.service.findOneById(id);
  }

  @UserResource.Update()
  async updateOneById(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return await this.service.updateOneById(id, updateUserDto);
  }

  @UserResource.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
