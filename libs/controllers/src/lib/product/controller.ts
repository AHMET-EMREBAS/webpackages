import { Body, Param, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create.dto';
import { UpdateProductDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Product } from '@webpackages/entities';
import { OrderProductDto, QueryProductDto, SearchProductDto } from './dto';
import { ProductService } from './service';

const C = new RestController({
  singularName: 'product',
  pluralName: 'products',
  entity: Product,
});

@C.Controller()
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @C.Create()
  async saveOne(@Body() createProductDto: CreateProductDto) {
    return await this.service.saveOne(createProductDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderProductDto,
    @Query() query: QueryProductDto,
    @Query() search: SearchProductDto
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
    @Body() updateProductDto: UpdateProductDto
  ) {
    return await this.service.updateOneById(id, updateProductDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryProductDto,
    @Query() search: SearchProductDto
  ) {
    return await this.service.count(query, search);
  }
}
