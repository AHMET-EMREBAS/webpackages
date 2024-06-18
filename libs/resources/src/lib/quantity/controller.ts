import { Body, Param, Query } from '@nestjs/common';
import { CreateQuantityDto } from './dto/create.dto';
import { UpdateQuantityDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Quantity } from './entities';
import { OrderQuantityDto, QueryQuantityDto, SearchQuantityDto } from './dto';
import { QuantityService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'quantity',
  pluralName: 'quantitys',
  entity: Quantity,
});

@C.Controller()
export class QuantityController {
  constructor(private readonly service: QuantityService) {}

  @C.Create()
  async saveOne(@Body() createQuantityDto: CreateQuantityDto) {
    return await this.service.saveOne(createQuantityDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderQuantityDto,
    @Query() query: QueryQuantityDto,
    @Query() search: SearchQuantityDto
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
    @Body() updateQuantityDto: UpdateQuantityDto
  ) {
    return await this.service.updateOneById(id, updateQuantityDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
