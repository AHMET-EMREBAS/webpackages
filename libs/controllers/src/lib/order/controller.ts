import { Body, Param, Query } from '@nestjs/common';
import { CreateOrderDto } from './dto/create.dto';
import { UpdateOrderDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Order } from '@webpackages/entities';
import { OrderOrderDto, QueryOrderDto, SearchOrderDto } from './dto';
import { OrderService } from './service';

const C = new RestController({
  singularName: 'order',
  pluralName: 'orders',
  entity: Order,
});

@C.Controller()
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @C.Create()
  async saveOne(@Body() createOrderDto: CreateOrderDto) {
    return await this.service.saveOne(createOrderDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderOrderDto,
    @Query() query: QueryOrderDto,
    @Query() search: SearchOrderDto
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
    @Body() updateOrderDto: UpdateOrderDto
  ) {
    return await this.service.updateOneById(id, updateOrderDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(@Query() query: QueryOrderDto, @Query() search: SearchOrderDto) {
    return await this.service.count(query, search);
  }
}
