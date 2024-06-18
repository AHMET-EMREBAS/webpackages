import { Body, Param, Query } from '@nestjs/common';
import { CreateProductImageDto } from './dto/create.dto';
import { UpdateProductImageDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { ProductImage } from './entities';
import {
  OrderProductImageDto,
  QueryProductImageDto,
  SearchProductImageDto,
} from './dto';
import { ProductImageService } from './service';

export const C = new HttpRouteBuilder({
  singularName: 'product-image',
  pluralName: 'product-images',
  entity: ProductImage,
});

@C.Controller()
export class ProductImageController {
  constructor(private readonly service: ProductImageService) {}

  @C.Create()
  async saveOne(@Body() createProductImageDto: CreateProductImageDto) {
    return await this.service.saveOne(createProductImageDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderProductImageDto,
    @Query() query: QueryProductImageDto,
    @Query() search: SearchProductImageDto
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
    @Body() updateProductImageDto: UpdateProductImageDto
  ) {
    return await this.service.updateOneById(id, updateProductImageDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
