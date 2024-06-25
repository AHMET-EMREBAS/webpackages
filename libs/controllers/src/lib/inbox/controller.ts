import { Body, Param, Query } from '@nestjs/common';
import { CreateInboxDto } from './dto/create.dto';
import { UpdateInboxDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Inbox } from '@webpackages/entities';
import { OrderInboxDto, QueryInboxDto, SearchInboxDto } from './dto';
import { InboxService } from './service';

const C = new RestController({
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

  @C.Count()
  async count(@Query() query: QueryInboxDto, @Query() search: SearchInboxDto) {
    return await this.service.count(query, search);
  }
}
