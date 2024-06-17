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
      ApiOperation({ summary: `Create ${this.singularName}` }),
      Post(this.path.singular()),
      CanWrite()
    );
  }

  FindAll() {
    return applyDecorators(
      ApiOperation({ summary: `Find all ${this.singularName}` }),
      Get(this.path.plural()),
      CanRead()
    );
  }

  FindOneById() {
    return applyDecorators(
      ApiOperation({ summary: `Find ${this.singularName} by id` }),
      Get(this.path.byId()),
      CanRead()
    );
  }

  Update() {
    return applyDecorators(
      ApiOperation({ summary: `Update ${this.singularName}` }),
      Put(this.path.byId()),
      CanUpdate()
    );
  }

  Delete() {
    return applyDecorators(
      ApiOperation({ summary: `Delete ${this.singularName}` }),
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

  FindAllRelation(relationSingularName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Find ${relationSingularName}` }),
      Get(this.path.relationPlural(relationSingularName)),
      CanWrite()
    );
  }

  FindRelationById(relationSingularName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Find ${relationSingularName}` }),
      Get(this.path.relationId(relationSingularName)),
      CanRead()
    );
  }

  UdpateRelation(relationSingularName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Update ${relationSingularName}` }),
      Put(this.path.relationId(relationSingularName)),
      CanUpdate()
    );
  }

  DeleteRelation(relationSingularName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Delete ${relationSingularName}` }),
      Delete(this.path.relationId(relationSingularName)),
      CanDelete()
    );
  }
}
