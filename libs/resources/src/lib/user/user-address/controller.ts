import { Body, Param, Query } from '@nestjs/common';
import { CreateUserAddressDto } from './dto/create.dto';
import { UpdateUserAddressDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { UserAddress } from './entities';
import {
  OrderUserAddressDto,
  QueryUserAddressDto,
  SearchUserAddressDto,
} from './dto';
import { UserAddressService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'user-address',
  pluralName: 'user-addresss',
  entity: UserAddress,
});

@C.Controller()
export class UserAddressController {
  constructor(private readonly service: UserAddressService) {}

  @C.Create()
  async saveOne(@Body() createUserAddressDto: CreateUserAddressDto) {
    return await this.service.saveOne(createUserAddressDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserAddressDto,
    @Query() query: QueryUserAddressDto,
    @Query() search: SearchUserAddressDto
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
    @Body() updateUserAddressDto: UpdateUserAddressDto
  ) {
    return await this.service.updateOneById(id, updateUserAddressDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
