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
  ApiBearerAuth,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { names } from '@nx/devkit';
import { AuthHeaders, AuthNames } from '@webpackages/types';
import {
  CanDelete,
  CanRead,
  CanUpdate,
  CanWrite,
  ResourceName,
} from '@webpackages/access-policy';
import { MessageResponse, ValidationErrorDto } from './responses';

import { ResourcePathBuilder } from '@webpackages/path';

export type RestControllerOptions = {
  singularName: string;
  pluralName: string;
  entity: Type;
};
/**
 * Decorate controllers and end points
 */
export class RestController {
  protected readonly path: ResourcePathBuilder;
  protected readonly singularName: string;
  protected readonly pluralName: string;
  protected readonly entity: Type;

  constructor(protected readonly options: RestControllerOptions) {
    const { singularName, pluralName, entity } = options;

    this.singularName = singularName;
    this.pluralName = pluralName;
    this.entity = entity;
    this.path = new ResourcePathBuilder({ singularName, pluralName });
  }

  __Common() {
    return [
      ApiHeader({ name: AuthHeaders.X_ORGNAME }),
      ApiHeader({ name: AuthHeaders.X_DEVICE_ID }),
      ApiHeader({ name: AuthHeaders.X_SCOPE }),
      ApiBearerAuth(AuthNames.BEARER_AUTH),
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
      ...this.__Common(),
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
      ...this.__Common(),
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
      ...this.__Common(),
      ApiOperation({ summary: `Find ${this.singularName} by id` }),
      Get(this.path.id()),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'Entity not found by the given id',
      }),
      CanRead()
    );
  }

  Update() {
    return applyDecorators(
      ...this.__Common(),
      ApiOperation({ summary: `Update ${this.singularName}` }),
      Put(this.path.id()),
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
      ...this.__Common(),
      ApiOperation({ summary: `Delete ${this.singularName}` }),
      Delete(this.path.id()),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'Entity not found by the given id',
      }),
      CanDelete()
    );
  }

  CreateRelation(singularRelationName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Create ${singularRelationName}` }),
      Post(this.path.singularRelation(singularRelationName)),
      CanWrite()
    );
  }

  FindAllRelation(singularRelationName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Find ${singularRelationName}` }),
      Get(this.path.pluralRelation(singularRelationName)),
      CanWrite()
    );
  }

  FindRelationById(singularRelationName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Find ${singularRelationName}` }),
      Get(this.path.idRelation(singularRelationName)),
      CanRead()
    );
  }

  UdpateRelation(singularRelationName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Update ${singularRelationName}` }),
      Put(this.path.idRelation(singularRelationName)),
      CanUpdate()
    );
  }

  DeleteRelation(singularRelationName: string) {
    return applyDecorators(
      ApiOperation({ summary: `Delete ${singularRelationName}` }),
      Delete(this.path.idRelation(singularRelationName)),
      CanDelete()
    );
  }
}
