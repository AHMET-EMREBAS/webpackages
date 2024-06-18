import { Body, Param, Query } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create.dto';
import { UpdateDepartmentDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Department } from './entities';
import {
  OrderDepartmentDto,
  QueryDepartmentDto,
  SearchDepartmentDto,
} from './dto';
import { DepartmentService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'department',
  pluralName: 'departments',
  entity: Department,
});

@C.Controller()
export class DepartmentController {
  constructor(private readonly service: DepartmentService) {}

  @C.Create()
  async saveOne(@Body() createDepartmentDto: CreateDepartmentDto) {
    return await this.service.saveOne(createDepartmentDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderDepartmentDto,
    @Query() query: QueryDepartmentDto,
    @Query() search: SearchDepartmentDto
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
    @Body() updateDepartmentDto: UpdateDepartmentDto
  ) {
    return await this.service.updateOneById(id, updateDepartmentDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
