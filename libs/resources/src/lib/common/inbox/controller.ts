import { Body, Param, Query } from '@nestjs/common';
import { CreateInboxDto } from './dto/create.dto';
import { UpdateInboxDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Inbox } from './entities';
import { OrderInboxDto, QueryInboxDto, SearchInboxDto } from './dto';
import { InboxService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'inbox',
  pluralName: 'inboxs',
  entity: Inbox,
});

@C.Controller()
export class InboxController {
  constructor(private readonly service: InboxService) {}

  @C.Create()
  async saveOne(@Body() createInboxDto: CreateInboxDto) {
    return await this.service.saveOne(createInboxDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderInboxDto,
    @Query() query: QueryInboxDto,
    @Query() search: SearchInboxDto
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
    @Body() updateInboxDto: UpdateInboxDto
  ) {
    return await this.service.updateOneById(id, updateInboxDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
