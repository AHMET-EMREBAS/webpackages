import { Body, Param, Query } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create.dto';
import { UpdateCustomerAddressDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { CustomerAddress } from '@webpackages/entities';
import {
  OrderCustomerAddressDto,
  QueryCustomerAddressDto,
  SearchCustomerAddressDto,
} from './dto';
import { CustomerAddressService } from './service';

const C = new RestController({
  singularName: 'customer-address',
  pluralName: 'customer-addresss',
  entity: CustomerAddress,
});

@C.Controller()
export class CustomerAddressController {
  constructor(private readonly service: CustomerAddressService) {}

  @C.Create()
  async saveOne(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return await this.service.saveOne(createCustomerAddressDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCustomerAddressDto,
    @Query() query: QueryCustomerAddressDto,
    @Query() search: SearchCustomerAddressDto
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
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto
  ) {
    return await this.service.updateOneById(id, updateCustomerAddressDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
