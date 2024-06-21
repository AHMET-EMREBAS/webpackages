import { Body, Param, Query } from '@nestjs/common';
import { CreatePriceLevelDto } from './dto/create.dto';
import { UpdatePriceLevelDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { PriceLevel } from '@webpackages/entities';
import {
  OrderPriceLevelDto,
  QueryPriceLevelDto,
  SearchPriceLevelDto,
} from './dto';
import { PriceLevelService } from './service';

const C = new RestController({
  singularName: 'price-level',
  pluralName: 'price-levels',
  entity: PriceLevel,
});

@C.Controller()
export class PriceLevelController {
  constructor(private readonly service: PriceLevelService) {}

  @C.Create()
  async saveOne(@Body() createPriceLevelDto: CreatePriceLevelDto) {
    return await this.service.saveOne(createPriceLevelDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderPriceLevelDto,
    @Query() query: QueryPriceLevelDto,
    @Query() search: SearchPriceLevelDto
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
    @Body() updatePriceLevelDto: UpdatePriceLevelDto
  ) {
    return await this.service.updateOneById(id, updatePriceLevelDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
