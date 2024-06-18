import { Body, Param, Query } from '@nestjs/common';
import { CreateCustomerEmailDto } from './dto/create.dto';
import { UpdateCustomerEmailDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { CustomerEmail } from './entities';
import {
  OrderCustomerEmailDto,
  QueryCustomerEmailDto,
  SearchCustomerEmailDto,
} from './dto';
import { CustomerEmailService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'customer-email',
  pluralName: 'customer-emails',
  entity: CustomerEmail,
});

@C.Controller()
export class CustomerEmailController {
  constructor(private readonly service: CustomerEmailService) {}

  @C.Create()
  async saveOne(@Body() createCustomerEmailDto: CreateCustomerEmailDto) {
    return await this.service.saveOne(createCustomerEmailDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCustomerEmailDto,
    @Query() query: QueryCustomerEmailDto,
    @Query() search: SearchCustomerEmailDto
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
    @Body() updateCustomerEmailDto: UpdateCustomerEmailDto
  ) {
    return await this.service.updateOneById(id, updateCustomerEmailDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
