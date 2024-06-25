import { Body, Param, Query } from '@nestjs/common';
import { CreateProductImgDto } from './dto/create.dto';
import { UpdateProductImgDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { ProductImg } from '@webpackages/entities';
import {
  OrderProductImgDto,
  QueryProductImgDto,
  SearchProductImgDto,
} from './dto';
import { ProductImgService } from './service';

const C = new RestController({
  singularName: 'product-img',
  pluralName: 'product-imgs',
  entity: ProductImg,
});

@C.Controller()
export class ProductImgController {
  constructor(private readonly service: ProductImgService) {}

  @C.Create()
  async saveOne(@Body() createProductImgDto: CreateProductImgDto) {
    return await this.service.saveOne(createProductImgDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderProductImgDto,
    @Query() query: QueryProductImgDto,
    @Query() search: SearchProductImgDto
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
    @Body() updateProductImgDto: UpdateProductImgDto
  ) {
    return await this.service.updateOneById(id, updateProductImgDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryProductImgDto,
    @Query() search: SearchProductImgDto
  ) {
    return await this.service.count(query, search);
  }
}
