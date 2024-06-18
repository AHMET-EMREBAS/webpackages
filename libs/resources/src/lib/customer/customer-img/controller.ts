import { Body, Param, Query } from '@nestjs/common';
import { CreateCustomerImgDto } from './dto/create.dto';
import { UpdateCustomerImgDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { CustomerImg } from './entities';
import {
  OrderCustomerImgDto,
  QueryCustomerImgDto,
  SearchCustomerImgDto,
} from './dto';
import { CustomerImgService } from './service';

const C = new HttpRouteBuilder({
  singularName: 'customer-img',
  pluralName: 'customer-imgs',
  entity: CustomerImg,
});

@C.Controller()
export class CustomerImgController {
  constructor(private readonly service: CustomerImgService) {}

  @C.Create()
  async saveOne(@Body() createCustomerImgDto: CreateCustomerImgDto) {
    return await this.service.saveOne(createCustomerImgDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCustomerImgDto,
    @Query() query: QueryCustomerImgDto,
    @Query() search: SearchCustomerImgDto
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
    @Body() updateCustomerImgDto: UpdateCustomerImgDto
  ) {
    return await this.service.updateOneById(id, updateCustomerImgDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
