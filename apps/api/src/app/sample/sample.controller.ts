import { Body, Param } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { HttpRouteBuilder } from '@webpackages/core';
import { Repository } from 'typeorm';
import { Sample } from './entities';

export const C = new HttpRouteBuilder({
  singularName: 'sample',
  pluralName: 'samples',
  createDto: CreateSampleDto,
  updateDto: UpdateSampleDto,
  queryDto: class A {},
});

@C.Controller()
export class SampleController {
  constructor(private readonly sampleRepo: Repository<Sample>) {}

  @C.Create()
  create(@Body() createSampleDto: CreateSampleDto) {
    return this.sampleRepo.create(createSampleDto);
  }

  @C.FindAll()
  findAll() {
    return this.sampleRepo.find();
  }

  @C.FindOneById()
  findOne(@Param('id') id: string) {
    return this.sampleRepo.findOneBy({ id: +id });
  }

  @C.Update()
  update(@Param('id') id: string, @Body() updateSampleDto: UpdateSampleDto) {
    return this.sampleRepo.update(+id, updateSampleDto);
  }

  @C.Delete()
  remove(@Param('id') id: string) {
    return this.sampleRepo.softDelete(+id);
  }
}
