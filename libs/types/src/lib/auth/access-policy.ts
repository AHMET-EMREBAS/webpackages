import { Operation } from './operation';

export type AccessPolicy<ResourceNames extends string = ''> = Partial<
  Record<ResourceNames, Partial<Operation>>
> & {
  Admin?: true;
  Root?: true;
  Reader?: true;
};

export function canRead<T extends string>(
  userPolicy: AccessPolicy<T>,
  resouceName: T
) {
  return userPolicy?.[resouceName]?.read;
}

export function canWrite<T extends string>(
  userPolicy: AccessPolicy<T>,
  resouceName: T
) {
  return userPolicy?.[resouceName]?.write;
}

export function canUpdate<T extends string>(
  userPolicy: AccessPolicy<T>,
  resouceName: T
) {
  return userPolicy?.[resouceName]?.update;
}

export function canDelete<T extends string>(
  userPolicy: AccessPolicy<T>,
  resouceName: T
) {
  return userPolicy?.[resouceName]?.delete;
}

export function canManage<T extends string>(
  userPolicy: AccessPolicy<T>,
  resouceName: T
) {
  return userPolicy?.[resouceName]?.manage;
}

export function isAdmin(userPolicy: AccessPolicy) {
  return userPolicy.Admin;
}
