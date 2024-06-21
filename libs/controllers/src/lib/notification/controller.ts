import { Body, Param, Query } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create.dto';
import { UpdateNotificationDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Notification } from '@webpackages/entities';
import {
  OrderNotificationDto,
  QueryNotificationDto,
  SearchNotificationDto,
} from './dto';
import { NotificationService } from './service';

const C = new RestController({
  singularName: 'notification',
  pluralName: 'notifications',
  entity: Notification,
});

@C.Controller()
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @C.Create()
  async saveOne(@Body() createNotificationDto: CreateNotificationDto) {
    return await this.service.saveOne(createNotificationDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderNotificationDto,
    @Query() query: QueryNotificationDto,
    @Query() search: SearchNotificationDto
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
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return await this.service.updateOneById(id, updateNotificationDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
