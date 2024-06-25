import { Body, Param, Query } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create.dto';
import { UpdateDiscountDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Discount } from '@webpackages/entities';
import { OrderDiscountDto, QueryDiscountDto, SearchDiscountDto } from './dto';
import { DiscountService } from './service';

const C = new RestController({
  singularName: 'discount',
  pluralName: 'discounts',
  entity: Discount,
});

@C.Controller()
export class DiscountController {
  constructor(private readonly service: DiscountService) {}

  @C.Create()
  async saveOne(@Body() createDiscountDto: CreateDiscountDto) {
    return await this.service.saveOne(createDiscountDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderDiscountDto,
    @Query() query: QueryDiscountDto,
    @Query() search: SearchDiscountDto
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
    @Body() updateDiscountDto: UpdateDiscountDto
  ) {
    return await this.service.updateOneById(id, updateDiscountDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QueryDiscountDto,
    @Query() search: SearchDiscountDto
  ) {
    return await this.service.count(query, search);
  }
}
