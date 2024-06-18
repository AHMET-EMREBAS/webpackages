import { Body, Param, Query, UnauthorizedException } from '@nestjs/common';
import { CreateClockInDto } from './dto/create.dto';
import { UpdateClockInDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { ClockIn } from './entities';
import { OrderClockInDto, QueryClockInDto, SearchClockInDto } from './dto';
import { ClockInService } from './service';
import { Equal } from 'typeorm';

const C = new HttpRouteBuilder({
  singularName: 'clock-in',
  pluralName: 'clock-ins',
  entity: ClockIn,
});

@C.Controller()
export class ClockInController {
  constructor(private readonly service: ClockInService) {}

  @C.Create()
  async saveOne(@Body() body: CreateClockInDto) {
    const { userId } = body;
    const found = await this.service.findOne({
      userId: Equal(userId),
      active: Equal(true),
    });

    if (found)
      throw new UnauthorizedException(`You have an open clock already!`);

    return await this.service.saveOne({ ...body, active: true });
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
  async updateOneById(@Param('id') id: number, @Body() body: UpdateClockInDto) {
    return await this.service.updateOneById(id, { active: false });
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
