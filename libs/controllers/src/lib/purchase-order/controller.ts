import { Body, Param, Query } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create.dto';
import { UpdatePurchaseOrderDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { PurchaseOrder } from '@webpackages/entities';
import {
  OrderPurchaseOrderDto,
  QueryPurchaseOrderDto,
  SearchPurchaseOrderDto,
} from './dto';
import { PurchaseOrderService } from './service';

const C = new RestController({
  singularName: 'purchase-order',
  pluralName: 'purchase-orders',
  entity: PurchaseOrder,
});

@C.Controller()
export class PurchaseOrderController {
  constructor(private readonly service: PurchaseOrderService) {}

  @C.Create()
  async saveOne(@Body() createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return await this.service.saveOne(createPurchaseOrderDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderPurchaseOrderDto,
    @Query() query: QueryPurchaseOrderDto,
    @Query() search: SearchPurchaseOrderDto
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
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto
  ) {
    return await this.service.updateOneById(id, updatePurchaseOrderDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryPurchaseOrderDto,
    @Query() search: SearchPurchaseOrderDto
  ) {
    return await this.service.count(query, search);
  }
}
