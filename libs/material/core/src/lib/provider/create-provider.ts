import { InjectionToken, Provider, Type } from '@angular/core';

export type ProviderOptions<T> = {
  token: () => InjectionToken<T>;
  provide: (value: T) => Provider;
  default: () => Provider;
};

export function createValueProvider<T>(
  tokenName: string,
  defaultValue: T
): ProviderOptions<T> {
  const token = new InjectionToken<T>(tokenName);
  const provider = (useValue: T): Provider => {
    return {
      provide: token,
      useValue,
    };
  };

  return {
    token: () => token,
    provide: provider,
    default: () => provider(defaultValue),
  };
}

export function createClassProvider<T>(
  tokenName: string,
  defaultValue: Type<T>
): ProviderOptions<Type<T>> {
  const token = new InjectionToken<Type<T>>(tokenName);
  const provider = (useClass: Type<T>): Provider => {
    return {
      provide: token,
      useClass,
    };
  };

  return {
    token: () => token,
    provide: provider,
    default: () => provider(defaultValue),
  };
}
