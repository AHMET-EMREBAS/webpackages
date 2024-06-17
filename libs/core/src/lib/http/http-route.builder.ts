import { ApiResourcePath } from '@webpackages/common';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  applyDecorators,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { names } from '@nx/devkit';
import {
  CanDelete,
  CanRead,
  CanUpdate,
  CanWrite,
  ResourceName,
} from '../metadata';

export class HttpRouteBuilder {
  protected readonly path: ApiResourcePath;

  constructor(protected singularName: string, protected pluralName: string) {
    this.path = new ApiResourcePath(singularName, pluralName);
  }

  Controller() {
    return applyDecorators(
      Controller(),
      ResourceName(this.singularName),
      ApiTags(`${names(this.singularName).className}Controller`)
    );
  }

  Create() {
    return applyDecorators(
      ApiOperation({ summary: 'Find All' }),
      Post(this.path.singular()),
      CanWrite()
    );
  }

  FindAll() {
    return applyDecorators(
      ApiOperation({ summary: 'Find All' }),
      Get(this.path.plural()),
      CanRead()
    );
  }

  FindOneById() {
    return applyDecorators(
      ApiOperation({ summary: 'Find one by id' }),
      Get(this.path.byId()),
      CanRead()
    );
  }

  Update() {
    return applyDecorators(
      ApiOperation({ summary: 'Update' }),
      Put(this.path.byId()),
      CanUpdate()
    );
  }

  Delete() {
    return applyDecorators(
      ApiOperation({ summary: 'Delete' }),
      Delete(this.path.byId()),
      CanDelete()
    );
  }

  CreateRelation(relationSingularName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Create ${relationSingularName}` }),
      Post(this.path.relationSingular(relationSingularName)),
      CanWrite()
    );
  }

  UdpateRelation(relationSingularName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Update ${relationSingularName}` }),
      Post(this.path.relationId(relationSingularName)),
      CanUpdate()
    );
  }
  
}
