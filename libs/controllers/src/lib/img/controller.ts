import { Body, Param, Query } from '@nestjs/common';
import { CreateImgDto } from './dto/create.dto';
import { UpdateImgDto } from './dto/update.dto';
import { PaginatorDto } from '@webpackages/query';
import { RestController } from '@webpackages/rest';
import { Img } from '@webpackages/entities';
import { OrderImgDto, QueryImgDto, SearchImgDto } from './dto';
import { ImgService } from './service';

const C = new RestController({
  singularName: 'img',
  pluralName: 'imgs',
  entity: Img,
});

@C.Controller()
export class ImgController {
  constructor(private readonly service: ImgService) {}

  @C.Create()
  async saveOne(@Body() createImgDto: CreateImgDto) {
    return await this.service.saveOne(createImgDto);
  }

  @C.FindAll()
  async findAll(
    @Query() paginator: PaginatorDto,
    @Query() order: OrderImgDto,
    @Query() query: QueryImgDto,
    @Query() search: SearchImgDto
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
    @Body() updateImgDto: UpdateImgDto
  ) {
    return await this.service.updateOneById(id, updateImgDto);
  }

  @C.Delete()
  async deleteById(@Param('id') id: number) {
    return await this.service.deleteById(id);
  }
}
