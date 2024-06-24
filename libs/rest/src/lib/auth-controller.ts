import { Controller, Post, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBasicAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { AuthPathBuilder } from '@webpackages/path';
import { AuthNames, Constructor } from '@webpackages/types';
import { MessageResponse, ValidationErrorDto } from './responses';

export type AuthControllerBuilderOptions = {
  pathBuilder: AuthPathBuilder;
  loginResponseDto: Constructor;
};

export class AuthControllerBuilder {
  private readonly path: AuthPathBuilder;
  constructor(protected readonly options: AuthControllerBuilderOptions) {
    this.path = options.pathBuilder;
  }

  Controller() {
    return applyDecorators(
      ApiTags('AuthController'),
      Controller(this.path.controller())
    );
  }

  __Common() {
    return applyDecorators(
      ApiUnauthorizedResponse(),
      ApiInternalServerErrorResponse()
    );
  }

  Login() {
    return applyDecorators(
      Post(this.path.login()),
      ApiBasicAuth(AuthNames.LOCAL_AUTH),
      ApiOkResponse({
        type: this.options.loginResponseDto,
        description: 'Success',
      }),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'user not found',
      }),
      ApiBadRequestResponse({
        type: MessageResponse,
        description: 'wrong password',
      }),
      this.__Common()
    );
  }

  Logout() {
    return applyDecorators(
      Post(this.path.logout()),
      ApiOkResponse(),
      ApiUnauthorizedResponse()
    );
  }

  Signup() {
    return applyDecorators(
      Post(this.path.signup()),
      ApiCreatedResponse({ type: MessageResponse, description: 'Success' }),
      ApiUnprocessableEntityResponse({
        type: ValidationErrorDto,
        description: 'Invalid input',
      }),
      this.__Common()
    );
  }

  ForgotPassword() {
    return applyDecorators(
      Post(this.path.forgotPassword()),
      ApiOkResponse({ type: MessageResponse, description: 'Success' }),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'User not found',
      }),
      this.__Common()
    );
  }

  SSOLogin() {
    return applyDecorators(
      Post(this.path.ssoLogin()),
      ApiOkResponse({
        type: this.options.loginResponseDto,
        description: 'Success',
      }),
      ApiNotFoundResponse({
        type: MessageResponse,
        description: 'User not found',
      }),
      ApiBadRequestResponse({
        type: MessageResponse,
        description: 'Invalid SSO',
      }),
      this.__Common()
    );
  }

  HasSession() {
    return applyDecorators(
      Post(this.path.hasSession()),
      ApiOkResponse({
        type: MessageResponse,
        description: 'User has a valid session',
      }),
      ApiBadRequestResponse({
        type: MessageResponse,
        description: 'User does not have a valid session',
      }),
      this.__Common()
    );
  }

  LogoutAll() {
    return applyDecorators(
      Post(this.path.logoutAll()),
      ApiOkResponse({
        type: MessageResponse,
        description: 'Delete all sessions of the user',
      }),
      this.__Common()
    );
  }
}
