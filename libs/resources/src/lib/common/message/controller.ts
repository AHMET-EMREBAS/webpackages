import { Body, Param, Query } from '@nestjs/common';
import { CreateMessageDto } from './dto/create.dto';
import { UpdateMessageDto } from './dto/update.dto';
import { HttpRouteBuilder, PaginatorDto } from '@webpackages/core';
import { Message } from './entities';
import { OrderMessageDto, QueryMessageDto, SearchMessageDto } from './dto';
import { MessageService } from './service';

 const C = new HttpRouteBuilder({
  singularName: 'message',
  pluralName: 'messages',
  entity: Message,
});

@C.Controller()
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @C.Create()
  async saveOne(@Body() createMessageDto: CreateMessageDto) {
    return await this.service.saveOne(createMessageDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderMessageDto,
    @Query() query: QueryMessageDto,
    @Query() search: SearchMessageDto
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
    @Body() updateMessageDto: UpdateMessageDto
  ) {
    return await this.service.updateOneById(id, updateMessageDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
