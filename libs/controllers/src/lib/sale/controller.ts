import { Body, Param, Query } from '@nestjs/common';
import { CreateSaleDto } from './dto/create.dto';
import { UpdateSaleDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Sale } from '@webpackages/entities';
import { OrderSaleDto, QuerySaleDto, SearchSaleDto } from './dto';
import { SaleService } from './service';

const C = new RestController({
  singularName: 'sale',
  pluralName: 'sales',
  entity: Sale,
});

@C.Controller()
export class SaleController {
  constructor(private readonly service: SaleService) {}

  @C.Create()
  async saveOne(@Body() createSaleDto: CreateSaleDto) {
    return await this.service.saveOne(createSaleDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSaleDto,
    @Query() query: QuerySaleDto,
    @Query() search: SearchSaleDto
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
    @Body() updateSaleDto: UpdateSaleDto
  ) {
    return await this.service.updateOneById(id, updateSaleDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
