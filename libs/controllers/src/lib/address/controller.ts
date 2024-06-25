import { Body, Param, Query } from '@nestjs/common';
import { CreateAddressDto } from './dto/create.dto';
import { UpdateAddressDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Address } from '@webpackages/entities';
import { OrderAddressDto, QueryAddressDto, SearchAddressDto } from './dto';
import { AddressService } from './service';

const C = new RestController({
  singularName: 'address',
  pluralName: 'addresss',
  entity: Address,
});

@C.Controller()
export class AddressController {
  constructor(private readonly service: AddressService) {}

  @C.Create()
  async saveOne(@Body() createAddressDto: CreateAddressDto) {
    return await this.service.saveOne(createAddressDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderAddressDto,
    @Query() query: QueryAddressDto,
    @Query() search: SearchAddressDto
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
    @Body() updateAddressDto: UpdateAddressDto
  ) {
    return await this.service.updateOneById(id, updateAddressDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryAddressDto,
    @Query() search: SearchAddressDto
  ) {
    return await this.service.count(query, search);
  }
}
