import { Body, Param, Query } from '@nestjs/common';
import { CreateUserEmailDto } from './dto/create.dto';
import { UpdateUserEmailDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { UserEmail } from './entities';
import {
  OrderUserEmailDto,
  QueryUserEmailDto,
  SearchUserEmailDto,
} from './dto';
import { UserEmailService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'user-email',
  pluralName: 'user-emails',
  entity: UserEmail,
});

@C.Controller()
export class UserEmailController {
  constructor(private readonly service: UserEmailService) {}

  @C.Create()
  async saveOne(@Body() createUserEmailDto: CreateUserEmailDto) {
    return await this.service.saveOne(createUserEmailDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserEmailDto,
    @Query() query: QueryUserEmailDto,
    @Query() search: SearchUserEmailDto
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
    @Body() updateUserEmailDto: UpdateUserEmailDto
  ) {
    return await this.service.updateOneById(id, updateUserEmailDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
