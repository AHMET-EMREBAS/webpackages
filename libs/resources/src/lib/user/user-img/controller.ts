import { Body, Param, Query } from '@nestjs/common';
import { CreateUserImgDto } from './dto/create.dto';
import { UpdateUserImgDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { UserImg } from './entities';
import { OrderUserImgDto, QueryUserImgDto, SearchUserImgDto } from './dto';
import { UserImgService } from './service';

const C = new HttpRouteBuilder({
  singularName: 'user-img',
  pluralName: 'user-imgs',
  entity: UserImg,
});

@C.Controller()
export class UserImgController {
  constructor(private readonly service: UserImgService) {}

  @C.Create()
  async saveOne(@Body() createUserImgDto: CreateUserImgDto) {
    return await this.service.saveOne(createUserImgDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserImgDto,
    @Query() query: QueryUserImgDto,
    @Query() search: SearchUserImgDto
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
    @Body() updateUserImgDto: UpdateUserImgDto
  ) {
    return await this.service.updateOneById(id, updateUserImgDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
