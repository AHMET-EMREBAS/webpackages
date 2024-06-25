import { Body, Param, Query } from '@nestjs/common';
import { CreateSkuDetailDto } from './dto/create.dto';
import { UpdateSkuDetailDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { SkuDetail } from '@webpackages/entities';
import {
  OrderSkuDetailDto,
  QuerySkuDetailDto,
  SearchSkuDetailDto,
} from './dto';
import { SkuDetailService } from './service';

const C = new RestController({
  singularName: 'sku-detail',
  pluralName: 'sku-details',
  entity: SkuDetail,
});

@C.Controller()
export class SkuDetailController {
  constructor(private readonly service: SkuDetailService) {}

  @C.Create()
  async saveOne(@Body() createSkuDetailDto: CreateSkuDetailDto) {
    return await this.service.saveOne(createSkuDetailDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSkuDetailDto,
    @Query() query: QuerySkuDetailDto,
    @Query() search: SearchSkuDetailDto
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
    @Body() updateSkuDetailDto: UpdateSkuDetailDto
  ) {
    return await this.service.updateOneById(id, updateSkuDetailDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QuerySkuDetailDto,
    @Query() search: SearchSkuDetailDto
  ) {
    return await this.service.count(query, search);
  }
}
