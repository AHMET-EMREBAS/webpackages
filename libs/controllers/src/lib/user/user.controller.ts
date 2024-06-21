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
import { RestController } from '@webpackages/rest';

export const UserRest = new RestController({
  singularName: 'user',
  pluralName: 'users',
  entity: User,
});

@UserRest.Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @UserRest.Create()
  async saveOne(@Body() createUserDto: CreateUserDto) {
    return await this.service.saveOne(createUserDto);
  }

  @UserRest.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserDto,
    @Query() query: QueryUserDto,
    @Query() search: SearchUserDto
  ) {
    return await this.service.findAll(paginator, order, query, search);
  }

  @UserRest.FindOneById()
  async findOneById(@Param('id') id: number) {
    return await this.service.findOneById(id);
  }

  @UserRest.Update()
  async updateOneById(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return await this.service.updateOneById(id, updateUserDto);
  }

  @UserRest.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
