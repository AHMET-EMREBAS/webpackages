import { Body, Param, Query } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create.dto';
import { UpdateSupplierDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Supplier } from '@webpackages/entities';
import { OrderSupplierDto, QuerySupplierDto, SearchSupplierDto } from './dto';
import { SupplierService } from './service';

const C = new RestController({
  singularName: 'supplier',
  pluralName: 'suppliers',
  entity: Supplier,
});

@C.Controller()
export class SupplierController {
  constructor(private readonly service: SupplierService) {}

  @C.Create()
  async saveOne(@Body() createSupplierDto: CreateSupplierDto) {
    return await this.service.saveOne(createSupplierDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSupplierDto,
    @Query() query: QuerySupplierDto,
    @Query() search: SearchSupplierDto
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
    @Body() updateSupplierDto: UpdateSupplierDto
  ) {
    return await this.service.updateOneById(id, updateSupplierDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(
    @Query() query: QuerySupplierDto,
    @Query() search: SearchSupplierDto
  ) {
    return await this.service.count(query, search);
  }
}
