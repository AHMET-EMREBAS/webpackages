import { ApiResourcePath } from '@webpackages/common';
import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Type,
  applyDecorators,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { names } from '@nx/devkit';
import { CanDelete, CanRead, CanUpdate, CanWrite, ResourceName } from '../auth';
import { MessageResponse, ValidationErrorDto } from './responses';

export type HttpRouteBuilderOptions = {
  singularName: string;
  pluralName: string;
  entity: Type;
  createDto: Type;
  updateDto: Type;
  queryDto: Type;
};
/**
 * Decorate controllers and end points
 */
export class HttpRouteBuilder {
  protected readonly path: ApiResourcePath;
  protected readonly singularName: string;
  protected readonly pluralName: string;
  protected readonly entity: Type;
  protected readonly createDto: Type;
  protected readonly updateDto: Type;
  protected readonly queryDto: Type;

  constructor(protected readonly options: HttpRouteBuilderOptions) {
    const { singularName, pluralName, entity, createDto, updateDto, queryDto } =
      options;

    this.singularName = singularName;
    this.pluralName = pluralName;
    this.entity = entity;
    this.createDto = createDto;
    this.updateDto = updateDto;
    this.queryDto = queryDto;

    this.path = new ApiResourcePath(singularName, pluralName);
  }

  __CommonResponses() {
    return [
      ApiUnauthorizedResponse({
        type: MessageResponse,
        description: 'You do not have sufficint priviledge for the operation',
      }),
    ];
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
      ...this.__CommonResponses(),
      ApiOperation({ summary: `Create ${this.singularName}` }),
      Post(this.path.singular()),
      ApiOkResponse({
        type: this.entity,
        status: HttpStatus.CREATED,
        description: 'Successful insert',
      }),
      ApiUnprocessableEntityResponse({
        type: ValidationErrorDto,
        isArray: true,
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        description: `Invalid input for ${this.singularName}`,
      }),
      CanWrite()
    );
  }

  FindAll() {
    return applyDecorators(
      ...this.__CommonResponses(),
      ApiOperation({ summary: `Find all ${this.singularName}` }),
      Get(this.path.plural()),
      ApiOkResponse({
        type: this.entity,
        isArray: true,
        description: 'Successful query',
      }),
      ApiUnprocessableEntityResponse({
        type: ValidationErrorDto,
        isArray: true,
        description: `Invalid query for ${this.singularName}`,
      }),
      CanRead()
    );
  }

  FindOneById() {
    return applyDecorators(
      ...this.__CommonResponses(),
      ApiOperation({ summary: `Find ${this.singularName} by id` }),
      Get(this.path.byId()),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'Entity not found by the given id',
      }),
      CanRead()
    );
  }

  Update() {
    return applyDecorators(
      ...this.__CommonResponses(),
      ApiOperation({ summary: `Update ${this.singularName}` }),
      Put(this.path.byId()),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'Entity not found by the given id',
      }),
      ApiUnprocessableEntityResponse({
        type: ValidationErrorDto,
        isArray: true,
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        description: `Invalid input for ${this.singularName}`,
      }),
      CanUpdate()
    );
  }

  Delete() {
    return applyDecorators(
      ...this.__CommonResponses(),
      ApiOperation({ summary: `Delete ${this.singularName}` }),
      Delete(this.path.byId()),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'Entity not found by the given id',
      }),
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
