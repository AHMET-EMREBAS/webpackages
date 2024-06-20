import { SetMetadata } from '@nestjs/common';
import { OperationNames, Roles } from '@webpackages/types';

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
