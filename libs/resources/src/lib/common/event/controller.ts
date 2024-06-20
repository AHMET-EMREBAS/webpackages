import { Body, Param, Query } from '@nestjs/common';
import { CreateEventDto } from './dto/create.dto';
import { UpdateEventDto } from './dto/update.dto';
import { ResourceController } from '@webpackages/controller-builder';
import { Event } from './entities';
import { OrderEventDto, QueryEventDto, SearchEventDto } from './dto';
import { EventService } from './service';

const C = new ResourceController({
  singularName: 'event',
  pluralName: 'events',
  entity: Event,
});

@C.Controller()
export class EventController {
  constructor(private readonly service: EventService) {}

  @C.Create()
  async saveOne(@Body() createEventDto: CreateEventDto) {
    return await this.service.saveOne(createEventDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderEventDto,
    @Query() query: QueryEventDto,
    @Query() search: SearchEventDto
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
    @Body() updateEventDto: UpdateEventDto
  ) {
    return await this.service.updateOneById(id, updateEventDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
