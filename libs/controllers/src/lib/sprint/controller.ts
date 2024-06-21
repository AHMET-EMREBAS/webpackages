import { Body, Param, Query } from '@nestjs/common';
import { CreateSprintDto } from './dto/create.dto';
import { UpdateSprintDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Sprint } from '@webpackages/entities';
import { OrderSprintDto, QuerySprintDto, SearchSprintDto } from './dto';
import { SprintService } from './service';

const C = new RestController({
  singularName: 'sprint',
  pluralName: 'sprints',
  entity: Sprint,
});

@C.Controller()
export class SprintController {
  constructor(private readonly service: SprintService) {}

  @C.Create()
  async saveOne(@Body() createSprintDto: CreateSprintDto) {
    return await this.service.saveOne(createSprintDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSprintDto,
    @Query() query: QuerySprintDto,
    @Query() search: SearchSprintDto
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
    @Body() updateSprintDto: UpdateSprintDto
  ) {
    return await this.service.updateOneById(id, updateSprintDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
