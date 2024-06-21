import { Body, Param, Query } from '@nestjs/common';
import { CreateSessionDto } from './dto/create.dto';
import { UpdateSessionDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Session } from '@webpackages/entities';
import { OrderSessionDto, QuerySessionDto, SearchSessionDto } from './dto';
import { SessionService } from './service';

const C = new RestController({
  singularName: 'session',
  pluralName: 'sessions',
  entity: Session,
});

@C.Controller()
export class SessionController {
  constructor(private readonly service: SessionService) {}

  @C.Create()
  async saveOne(@Body() createSessionDto: CreateSessionDto) {
    return await this.service.saveOne(createSessionDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderSessionDto,
    @Query() query: QuerySessionDto,
    @Query() search: SearchSessionDto
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
    @Body() updateSessionDto: UpdateSessionDto
  ) {
    return await this.service.updateOneById(id, updateSessionDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
