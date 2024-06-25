import { Body, Param, Query } from '@nestjs/common';
import { CreateAppEventDto } from './dto/create.dto';
import { UpdateAppEventDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { AppEvent } from '@webpackages/entities';
import { OrderAppEventDto, QueryAppEventDto, SearchAppEventDto } from './dto';
import { AppEventService } from './service';

const C = new RestController({
  singularName: 'app-event',
  pluralName: 'app-events',
  entity: AppEvent,
});

@C.Controller()
export class AppEventController {
  constructor(private readonly service: AppEventService) {}

  @C.Create()
  async saveOne(@Body() createAppEventDto: CreateAppEventDto) {
    return await this.service.saveOne(createAppEventDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderAppEventDto,
    @Query() query: QueryAppEventDto,
    @Query() search: SearchAppEventDto
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
    @Body() updateAppEventDto: UpdateAppEventDto
  ) {
    return await this.service.updateOneById(id, updateAppEventDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryAppEventDto,
    @Query() search: SearchAppEventDto
  ) {
    return await this.service.count(query, search);
  }
}
