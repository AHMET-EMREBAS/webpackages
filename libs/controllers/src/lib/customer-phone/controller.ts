import { Body, Param, Query } from '@nestjs/common';
import { CreateCustomerPhoneDto } from './dto/create.dto';
import { UpdateCustomerPhoneDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { CustomerPhone } from '@webpackages/entities';
import {
  OrderCustomerPhoneDto,
  QueryCustomerPhoneDto,
  SearchCustomerPhoneDto,
} from './dto';
import { CustomerPhoneService } from './service';

const C = new RestController({
  singularName: 'customer-phone',
  pluralName: 'customer-phones',
  entity: CustomerPhone,
});

@C.Controller()
export class CustomerPhoneController {
  constructor(private readonly service: CustomerPhoneService) {}

  @C.Create()
  async saveOne(@Body() createCustomerPhoneDto: CreateCustomerPhoneDto) {
    return await this.service.saveOne(createCustomerPhoneDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCustomerPhoneDto,
    @Query() query: QueryCustomerPhoneDto,
    @Query() search: SearchCustomerPhoneDto
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
    @Body() updateCustomerPhoneDto: UpdateCustomerPhoneDto
  ) {
    return await this.service.updateOneById(id, updateCustomerPhoneDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
