import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthNames } from '@webpackages/types';
import { LocalGuard } from './local.guard';
import { PublicResource } from '@webpackages/access-policy';

export function Auth() {
  return applyDecorators(
    ApiBearerAuth(AuthNames.BEARER_AUTH),
    UseGuards(AuthGuard)
  );
}

export function BasicAuth() {
  return applyDecorators(
    ApiBearerAuth(AuthNames.LOCAL_AUTH),
    PublicResource(),
    UseGuards(LocalGuard)
  );
}
