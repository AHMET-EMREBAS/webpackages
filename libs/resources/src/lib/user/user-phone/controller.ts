import { Body, Param, Query } from '@nestjs/common';
import { CreateUserPhoneDto } from './dto/create.dto';
import { UpdateUserPhoneDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { UserPhone } from './entities';
import {
  OrderUserPhoneDto,
  QueryUserPhoneDto,
  SearchUserPhoneDto,
} from './dto';
import { UserPhoneService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'user-phone',
  pluralName: 'user-phones',
  entity: UserPhone,
});

@C.Controller()
export class UserPhoneController {
  constructor(private readonly service: UserPhoneService) {}

  @C.Create()
  async saveOne(@Body() createUserPhoneDto: CreateUserPhoneDto) {
    return await this.service.saveOne(createUserPhoneDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserPhoneDto,
    @Query() query: QueryUserPhoneDto,
    @Query() search: SearchUserPhoneDto
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
    @Body() updateUserPhoneDto: UpdateUserPhoneDto
  ) {
    return await this.service.updateOneById(id, updateUserPhoneDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
