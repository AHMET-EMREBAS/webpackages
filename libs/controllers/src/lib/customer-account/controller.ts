import { Body, Param, Query } from '@nestjs/common';
import { CreateCustomerAccountDto } from './dto/create.dto';
import { UpdateCustomerAccountDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { CustomerAccount } from '@webpackages/entities';
import {
  OrderCustomerAccountDto,
  QueryCustomerAccountDto,
  SearchCustomerAccountDto,
} from './dto';
import { CustomerAccountService } from './service';

const C = new RestController({
  singularName: 'customer-account',
  pluralName: 'customer-accounts',
  entity: CustomerAccount,
});

@C.Controller()
export class CustomerAccountController {
  constructor(private readonly service: CustomerAccountService) {}

  @C.Create()
  async saveOne(@Body() createCustomerAccountDto: CreateCustomerAccountDto) {
    return await this.service.saveOne(createCustomerAccountDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCustomerAccountDto,
    @Query() query: QueryCustomerAccountDto,
    @Query() search: SearchCustomerAccountDto
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
    @Body() updateCustomerAccountDto: UpdateCustomerAccountDto
  ) {
    return await this.service.updateOneById(id, updateCustomerAccountDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryCustomerAccountDto,
    @Query() search: SearchCustomerAccountDto
  ) {
    return await this.service.count(query, search);
  }
}
