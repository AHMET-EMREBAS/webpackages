import { Body, Param, Query } from '@nestjs/common';
import { CreateSerialNumberDto } from './dto/create.dto';
import { UpdateSerialNumberDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { SerialNumber } from './entities';
import {
  OrderSerialNumberDto,
  QuerySerialNumberDto,
  SearchSerialNumberDto,
} from './dto';
import { SerialNumberService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'serial-number',
  pluralName: 'serial-numbers',
  entity: SerialNumber,
});

@C.Controller()
export class SerialNumberController {
  constructor(private readonly service: SerialNumberService) {}

  @C.Create()
  async saveOne(@Body() createSerialNumberDto: CreateSerialNumberDto) {
    return await this.service.saveOne(createSerialNumberDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSerialNumberDto,
    @Query() query: QuerySerialNumberDto,
    @Query() search: SearchSerialNumberDto
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
    @Body() updateSerialNumberDto: UpdateSerialNumberDto
  ) {
    return await this.service.updateOneById(id, updateSerialNumberDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
