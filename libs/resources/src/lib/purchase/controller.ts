import { Body, Param, Query } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create.dto';
import { UpdatePurchaseDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Purchase } from './entities';
import { OrderPurchaseDto, QueryPurchaseDto, SearchPurchaseDto } from './dto';
import { PurchaseService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'purchase',
  pluralName: 'purchases',
  entity: Purchase,
});

@C.Controller()
export class PurchaseController {
  constructor(private readonly service: PurchaseService) {}

  @C.Create()
  async saveOne(@Body() createPurchaseDto: CreatePurchaseDto) {
    return await this.service.saveOne(createPurchaseDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderPurchaseDto,
    @Query() query: QueryPurchaseDto,
    @Query() search: SearchPurchaseDto
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
    @Body() updatePurchaseDto: UpdatePurchaseDto
  ) {
    return await this.service.updateOneById(id, updatePurchaseDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
