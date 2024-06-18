import { Body, Param, Query } from '@nestjs/common';
import { CreateAccessTokenDto } from './dto/create.dto';
import { UpdateAccessTokenDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { AccessToken } from './entities';
import {
  OrderAccessTokenDto,
  QueryAccessTokenDto,
  SearchAccessTokenDto,
} from './dto';
import { AccessTokenService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'access-token',
  pluralName: 'access-tokens',
  entity: AccessToken,
});

@C.Controller()
export class AccessTokenController {
  constructor(private readonly service: AccessTokenService) {}

  @C.Create()
  async saveOne(@Body() createAccessTokenDto: CreateAccessTokenDto) {
    return await this.service.saveOne(createAccessTokenDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderAccessTokenDto,
    @Query() query: QueryAccessTokenDto,
    @Query() search: SearchAccessTokenDto
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
    @Body() updateAccessTokenDto: UpdateAccessTokenDto
  ) {
    return await this.service.updateOneById(id, updateAccessTokenDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
