import { Body, Param, Query } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create.dto';
import { UpdateCustomerDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Customer } from './entities';
import { OrderCustomerDto, QueryCustomerDto, SearchCustomerDto } from './dto';
import { CustomerService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'customer',
  pluralName: 'customers',
  entity: Customer,
});

@C.Controller()
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @C.Create()
  async saveOne(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.service.saveOne(createCustomerDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCustomerDto,
    @Query() query: QueryCustomerDto,
    @Query() search: SearchCustomerDto
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
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return await this.service.updateOneById(id, updateCustomerDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
