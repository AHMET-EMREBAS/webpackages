import { Body, Param, Query } from '@nestjs/common';
import { CreateEmailDto } from './dto/create.dto';
import { UpdateEmailDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Email } from '@webpackages/entities';
import { OrderEmailDto, QueryEmailDto, SearchEmailDto } from './dto';
import { EmailService } from './service';

const C = new RestController({
  singularName: 'email',
  pluralName: 'emails',
  entity: Email,
});

@C.Controller()
export class EmailController {
  constructor(private readonly service: EmailService) {}

  @C.Create()
  async saveOne(@Body() createEmailDto: CreateEmailDto) {
    return await this.service.saveOne(createEmailDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderEmailDto,
    @Query() query: QueryEmailDto,
    @Query() search: SearchEmailDto
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
    @Body() updateEmailDto: UpdateEmailDto
  ) {
    return await this.service.updateOneById(id, updateEmailDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(@Query() query: QueryEmailDto, @Query() search: SearchEmailDto) {
    return await this.service.count(query, search);
  }
}
