import { OperationNames, ResourceName } from '@webpackages/types';
import { getUserAccessPolicyOrThrow } from './user-access-policy-store';

export function canActivateResource(
  resourceName: ResourceName,
  operation: OperationNames
) {
  try {
    const accessPolicy = getUserAccessPolicyOrThrow();
    return accessPolicy[resourceName][operation];
  } catch (err) {
    return false;
  }
}
