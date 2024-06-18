import { Body, Param, Query } from '@nestjs/common';
import { CreatePriceDto } from './dto/create.dto';
import { UpdatePriceDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Price } from './entities';
import { OrderPriceDto, QueryPriceDto, SearchPriceDto } from './dto';
import { PriceService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'price',
  pluralName: 'prices',
  entity: Price,
});

@C.Controller()
export class PriceController {
  constructor(private readonly service: PriceService) {}

  @C.Create()
  async saveOne(@Body() createPriceDto: CreatePriceDto) {
    return await this.service.saveOne(createPriceDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderPriceDto,
    @Query() query: QueryPriceDto,
    @Query() search: SearchPriceDto
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
    @Body() updatePriceDto: UpdatePriceDto
  ) {
    return await this.service.updateOneById(id, updatePriceDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
