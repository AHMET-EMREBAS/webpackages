import { Body, Param, Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create.dto';
import { UpdateCategoryDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Category } from '@webpackages/entities';
import { OrderCategoryDto, QueryCategoryDto, SearchCategoryDto } from './dto';
import { CategoryService } from './service';

const C = new RestController({
  singularName: 'category',
  pluralName: 'categorys',
  entity: Category,
});

@C.Controller()
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @C.Create()
  async saveOne(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.service.saveOne(createCategoryDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCategoryDto,
    @Query() query: QueryCategoryDto,
    @Query() search: SearchCategoryDto
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
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return await this.service.updateOneById(id, updateCategoryDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryCategoryDto,
    @Query() search: SearchCategoryDto
  ) {
    return await this.service.count(query, search);
  }
}
