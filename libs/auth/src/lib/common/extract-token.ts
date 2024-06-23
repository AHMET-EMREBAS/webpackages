import { UnauthorizedException } from '@nestjs/common';
import { isNotUndefined } from '@webpackages/utils';
import { Request } from 'express';

export function extractToken(req: Request): string {
  const token =
    req.headers.authorization ||
    req.cookies.authorization ||
    req.query['authorization'];

  if (isNotUndefined(token)) {
    const [, ...rest] = token.split(' ');
    return rest.join(' ');
  }

  throw new UnauthorizedException(`Authorization token is not provided`);
}
