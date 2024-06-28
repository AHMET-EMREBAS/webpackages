import { Body, Param, Query } from '@nestjs/common';
import { CreateProductAttributeDto } from './dto/create.dto';
import { UpdateProductAttributeDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { ProductAttribute } from '@webpackages/entities';
import {
  OrderProductAttributeDto,
  QueryProductAttributeDto,
  SearchProductAttributeDto,
} from './dto';
import { ProductAttributeService } from './service';

const C = new RestController({
  singularName: 'product-attribute',
  pluralName: 'product-attributes',
  entity: ProductAttribute,
});

@C.Controller()
export class ProductAttributeController {
  constructor(private readonly service: ProductAttributeService) {}

  @C.Create()
  async saveOne(@Body() createProductAttributeDto: CreateProductAttributeDto) {
    return await this.service.saveOne(createProductAttributeDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderProductAttributeDto,
    @Query() query: QueryProductAttributeDto,
    @Query() search: SearchProductAttributeDto
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
    @Body() updateProductAttributeDto: UpdateProductAttributeDto
  ) {
    return await this.service.updateOneById(id, updateProductAttributeDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryProductAttributeDto,
    @Query() search: SearchProductAttributeDto
  ) {
    return await this.service.count(query, search);
  }
}
