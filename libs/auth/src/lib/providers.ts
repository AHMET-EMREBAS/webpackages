import { Provider } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards';

export function provideGlobalAuthGuard(): Provider {
  return {
    provide: APP_GUARD,
    useClass: AuthGuard,
  };
}
