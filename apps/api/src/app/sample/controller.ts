import { Body, Param, Query } from '@nestjs/common';
import { CreateSampleDto } from './dto/create.dto';
import { UpdateSampleDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Sample } from './entities';
import { OrderSampleDto, QuerySampleDto, SearchSampleDto } from './dto';
import { SampleService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'sample',
  pluralName: 'samples',
  entity: Sample,
});

@C.Controller()
export class SampleController {
  constructor(private readonly service: SampleService) {}

  @C.Create()
  async saveOne(@Body() createSampleDto: CreateSampleDto) {
    return await this.service.saveOne(createSampleDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSampleDto,
    @Query() query: QuerySampleDto,
    @Query() search: SearchSampleDto
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
    @Body() updateSampleDto: UpdateSampleDto
  ) {
    return await this.service.updateOneById(id, updateSampleDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
