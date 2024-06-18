import { BadRequestException, Body, Param, Query } from '@nestjs/common';
import { CreateClockInDto } from './dto/create.dto';
import { UpdateClockInDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { ClockIn } from './entities';
import { OrderClockInDto, QueryClockInDto, SearchClockInDto } from './dto';
import { ClockInService } from './service';

const C = new HttpRouteBuilder({
  singularName: 'clock-in',
  pluralName: 'clock-ins',
  entity: ClockIn,
});

@C.Controller()
export class ClockInController {
  constructor(private readonly service: ClockInService) {}

  @C.Create()
  async saveOne(@Body() createClockInDto: CreateClockInDto) {
    return await this.service.saveOne(createClockInDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderClockInDto,
    @Query() query: QueryClockInDto,
    @Query() search: SearchClockInDto
  ) {
    return await this.service.findAll(paginator, order, query, search);
  }

  @C.FindOneById()
  async findOneById(@Param('id') id: number) {
    return await this.service.findOneById(id);
  }

  @C.Update()
  async updateOneById(@Param('id') id: number) {
    return await this.service.updateOneById(id, { active: false });
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
