import { Body, Param, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.dto';
import { UpdateTaskDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Task } from '@webpackages/entities';
import { OrderTaskDto, QueryTaskDto, SearchTaskDto } from './dto';
import { TaskService } from './service';

const C = new RestController({
  singularName: 'task',
  pluralName: 'tasks',
  entity: Task,
});

@C.Controller()
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @C.Create()
  async saveOne(@Body() createTaskDto: CreateTaskDto) {
    return await this.service.saveOne(createTaskDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderTaskDto,
    @Query() query: QueryTaskDto,
    @Query() search: SearchTaskDto
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
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    return await this.service.updateOneById(id, updateTaskDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(@Query() query: QueryTaskDto, @Query() search: SearchTaskDto) {
    return await this.service.count(query, search);
  }
}
