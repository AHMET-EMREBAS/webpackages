import { Body, Param, Query } from '@nestjs/common';
import { CreateProjectDto } from './dto/create.dto';
import { UpdateProjectDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Project } from './entities';
import { OrderProjectDto, QueryProjectDto, SearchProjectDto } from './dto';
import { ProjectService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'project',
  pluralName: 'projects',
  entity: Project,
});

@C.Controller()
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @C.Create()
  async saveOne(@Body() createProjectDto: CreateProjectDto) {
    return await this.service.saveOne(createProjectDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderProjectDto,
    @Query() query: QueryProjectDto,
    @Query() search: SearchProjectDto
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
    @Body() updateProjectDto: UpdateProjectDto
  ) {
    return await this.service.updateOneById(id, updateProjectDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
