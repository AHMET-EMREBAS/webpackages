import { AccessPolicy } from './access-policy';
import { ResourceName } from './resource-names';

export function canRead(userPolicy: AccessPolicy, resouceName: ResourceName) {
  return userPolicy?.[resouceName]?.read;
}

export function canWrite(userPolicy: AccessPolicy, resouceName: ResourceName) {
  return userPolicy?.[resouceName]?.write;
}

export function canUpdate(
  userPolicy: AccessPolicy,
  resouceName: ResourceName
) {
  return userPolicy?.[resouceName]?.update;
}

export function canDelete(
  userPolicy: AccessPolicy,
  resouceName: ResourceName
) {
  return userPolicy?.[resouceName]?.delete;
}

export function canManage(
  userPolicy: AccessPolicy,
  resouceName: ResourceName
) {
  return userPolicy?.[resouceName]?.manage;
}

export function isAdmin(userPolicy: AccessPolicy) {
  return userPolicy.Admin;
}
