import { Body, Param, Query } from '@nestjs/common';
import { CreateStoreDto } from './dto/create.dto';
import { UpdateStoreDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Store } from './entities';
import { OrderStoreDto, QueryStoreDto, SearchStoreDto } from './dto';
import { StoreService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'store',
  pluralName: 'stores',
  entity: Store,
});

@C.Controller()
export class StoreController {
  constructor(private readonly service: StoreService) {}

  @C.Create()
  async saveOne(@Body() createStoreDto: CreateStoreDto) {
    return await this.service.saveOne(createStoreDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderStoreDto,
    @Query() query: QueryStoreDto,
    @Query() search: SearchStoreDto
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
    @Body() updateStoreDto: UpdateStoreDto
  ) {
    return await this.service.updateOneById(id, updateStoreDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
