import { Body, Param, Query } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create.dto';
import { UpdateOrganizationDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Organization } from '@webpackages/entities';
import {
  OrderOrganizationDto,
  QueryOrganizationDto,
  SearchOrganizationDto,
} from './dto';
import { OrganizationService } from './service';

const C = new RestController({
  singularName: 'organization',
  pluralName: 'organizations',
  entity: Organization,
});

@C.Controller()
export class OrganizationController {
  constructor(private readonly service: OrganizationService) {}

  @C.Create()
  async saveOne(@Body() createOrganizationDto: CreateOrganizationDto) {
    return await this.service.saveOne(createOrganizationDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderOrganizationDto,
    @Query() query: QueryOrganizationDto,
    @Query() search: SearchOrganizationDto
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
    @Body() updateOrganizationDto: UpdateOrganizationDto
  ) {
    return await this.service.updateOneById(id, updateOrganizationDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
