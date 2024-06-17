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

export const RequiredPermissionToken = Symbol('RequiredPermission');

export enum ActionGroupEnum {
  MANAGE = 'manage',
  READ = 'read',
  WRITE = 'write',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type ActionGroup = 'manage' | 'read' | 'write' | 'update' | 'delete';

export function CanManage() {
  return SetMetadata(RequiredPermissionToken, ActionGroupEnum.MANAGE);
}

export function CanRead() {
  return SetMetadata(RequiredPermissionToken, ActionGroupEnum.READ);
}

export function CanWrite() {
  return SetMetadata(RequiredPermissionToken, ActionGroupEnum.WRITE);
}

export function CanUpdate() {
  return SetMetadata(RequiredPermissionToken, ActionGroupEnum.UPDATE);
}

export function CanDelete() {
  return SetMetadata(RequiredPermissionToken, ActionGroupEnum.DELETE);
}

export const RequiredRoleToken = Symbol('RequiredRole');

export function RequiredRole(role: string) {
  return SetMetadata(RequiredRoleToken, role);
}

export enum Roles {
  ADMIN = 'ADMIN',
  ROOT = 'ROOT',
}

export function Admin() {
  return RequiredRole(Roles.ADMIN);
}

export function Root() {
  return RequiredRole(Roles.ROOT);
}

export type AccessPolicy<ResourceNames extends string = ''> = Partial<
  Record<ResourceNames, Partial<Record<ActionGroup, true>>>
> & {
  Admin?: true;
  Root?: true;
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
