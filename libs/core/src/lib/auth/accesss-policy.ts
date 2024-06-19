import { SetMetadata } from '@nestjs/common';

export const PublicResourceToken = Symbol('PublicResource');

export function PublicResource() {
  return SetMetadata(PublicResourceToken, true);
}

export const ResouceNameToken = Symbol('ResourceName');

export function ResourceName(name: string) {
  return SetMetadata(ResouceNameToken, name);
}

export const ScopeNameToken = Symbol('ScopeName');

export function ScopeName(name: string) {
  return SetMetadata(ScopeNameToken, name);
}

export const ResourceOperationType = Symbol('ResourceOperationType');

export enum OperationNames {
  MANAGE = 'manage',
  READ = 'read',
  WRITE = 'write',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type Operation = {
  manage: boolean;
  read: boolean;
  write: boolean;
  update: boolean;
  delete: boolean;
};

export function CanManage() {
  return SetMetadata(ResourceOperationType, OperationNames.MANAGE);
}

export function CanRead() {
  return SetMetadata(ResourceOperationType, OperationNames.READ);
}

export function CanWrite() {
  return SetMetadata(ResourceOperationType, OperationNames.WRITE);
}

export function CanUpdate() {
  return SetMetadata(ResourceOperationType, OperationNames.UPDATE);
}

export function CanDelete() {
  return SetMetadata(ResourceOperationType, OperationNames.DELETE);
}

export const RequiredRoleToken = Symbol('RequiredRole');

export function RequiredRole(role: string) {
  return SetMetadata(RequiredRoleToken, role);
}

/**
 * Common roles
 */
export enum Roles {
  ADMIN = 'Admin',
  ROOT = 'Root',
}

/**
 * Admin user only
 * @returns
 */
export function Admin() {
  return RequiredRole(Roles.ADMIN);
}

/**
 * Root user only
 * @returns
 */
export function Root() {
  return RequiredRole(Roles.ROOT);
}

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
