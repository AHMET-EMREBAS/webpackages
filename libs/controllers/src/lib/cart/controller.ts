import { Body, Param, Query } from '@nestjs/common';
import { CreateCartDto } from './dto/create.dto';
import { UpdateCartDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Cart } from '@webpackages/entities';
import { OrderCartDto, QueryCartDto, SearchCartDto } from './dto';
import { CartService } from './service';

const C = new RestController({
  singularName: 'cart',
  pluralName: 'carts',
  entity: Cart,
});

@C.Controller()
export class CartController {
  constructor(private readonly service: CartService) {}

  @C.Create()
  async saveOne(@Body() createCartDto: CreateCartDto) {
    return await this.service.saveOne(createCartDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderCartDto,
    @Query() query: QueryCartDto,
    @Query() search: SearchCartDto
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
    @Body() updateCartDto: UpdateCartDto
  ) {
    return await this.service.updateOneById(id, updateCartDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
