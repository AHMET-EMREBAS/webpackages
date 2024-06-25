import { Body, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { User } from '@webpackages/entities';
import { OrderUserDto, QueryUserDto, SearchUserDto } from './dto';
import { UserService } from './service';

const C = new RestController({
  singularName: 'user',
  pluralName: 'users',
  entity: User,
});

@C.Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @C.Create()
  async saveOne(@Body() createUserDto: CreateUserDto) {
    return await this.service.saveOne(createUserDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderUserDto,
    @Query() query: QueryUserDto,
    @Query() search: SearchUserDto
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
    @Body() updateUserDto: UpdateUserDto
  ) {
    return await this.service.updateOneById(id, updateUserDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }

  @C.Count()
  async count(@Query() query: QueryUserDto, @Query() search: SearchUserDto) {
    return await this.service.count(query, search);
  }
}
