import { Body, Param, Query } from '@nestjs/common';
import { CreateClockDto } from './dto/create.dto';
import { UpdateClockDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Clock } from '@webpackages/entities';
import { OrderClockDto, QueryClockDto, SearchClockDto } from './dto';
import { ClockService } from './service';

const C = new RestController({
  singularName: 'clock',
  pluralName: 'clocks',
  entity: Clock,
});

@C.Controller()
export class ClockController {
  constructor(private readonly service: ClockService) {}

  @C.Create()
  async saveOne(@Body() createClockDto: CreateClockDto) {
    return await this.service.saveOne(createClockDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderClockDto,
    @Query() query: QueryClockDto,
    @Query() search: SearchClockDto
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
    @Body() updateClockDto: UpdateClockDto
  ) {
    return await this.service.updateOneById(id, updateClockDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
