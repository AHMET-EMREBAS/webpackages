import { Body, Param, Query } from '@nestjs/common';
import { CreateManufacturerDto } from './dto/create.dto';
import { UpdateManufacturerDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Manufacturer } from './entities';
import {
  OrderManufacturerDto,
  QueryManufacturerDto,
  SearchManufacturerDto,
} from './dto';
import { ManufacturerService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'manufacturer',
  pluralName: 'manufacturers',
  entity: Manufacturer,
});

@C.Controller()
export class ManufacturerController {
  constructor(private readonly service: ManufacturerService) {}

  @C.Create()
  async saveOne(@Body() createManufacturerDto: CreateManufacturerDto) {
    return await this.service.saveOne(createManufacturerDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderManufacturerDto,
    @Query() query: QueryManufacturerDto,
    @Query() search: SearchManufacturerDto
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
    @Body() updateManufacturerDto: UpdateManufacturerDto
  ) {
    return await this.service.updateOneById(id, updateManufacturerDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
