import { Body, Param, Query } from '@nestjs/common';
import { CreateSkuDto } from './dto/create.dto';
import { UpdateSkuDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Sku } from '@webpackages/entities';
import { OrderSkuDto, QuerySkuDto, SearchSkuDto } from './dto';
import { SkuService } from './service';

const C = new RestController({
  singularName: 'sku',
  pluralName: 'skus',
  entity: Sku,
});

@C.Controller()
export class SkuController {
  constructor(private readonly service: SkuService) {}

  @C.Create()
  async saveOne(@Body() createSkuDto: CreateSkuDto) {
    return await this.service.saveOne(createSkuDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSkuDto,
    @Query() query: QuerySkuDto,
    @Query() search: SearchSkuDto
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
    @Body() updateSkuDto: UpdateSkuDto
  ) {
    return await this.service.updateOneById(id, updateSkuDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
