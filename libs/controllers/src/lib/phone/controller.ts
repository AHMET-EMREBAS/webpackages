import { Body, Param, Query } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create.dto';
import { UpdatePhoneDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Phone } from '@webpackages/entities';
import { OrderPhoneDto, QueryPhoneDto, SearchPhoneDto } from './dto';
import { PhoneService } from './service';

const C = new RestController({
  singularName: 'phone',
  pluralName: 'phones',
  entity: Phone,
});

@C.Controller()
export class PhoneController {
  constructor(private readonly service: PhoneService) {}

  @C.Create()
  async saveOne(@Body() createPhoneDto: CreatePhoneDto) {
    return await this.service.saveOne(createPhoneDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderPhoneDto,
    @Query() query: QueryPhoneDto,
    @Query() search: SearchPhoneDto
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
    @Body() updatePhoneDto: UpdatePhoneDto
  ) {
    return await this.service.updateOneById(id, updatePhoneDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(@Query() query: QueryPhoneDto, @Query() search: SearchPhoneDto) {
    return await this.service.count(query, search);
  }
}
