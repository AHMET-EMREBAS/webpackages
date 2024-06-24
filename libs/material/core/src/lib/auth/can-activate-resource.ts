import { OperationNames, ResourceName } from '@webpackages/types';
import { getUserAccessPolicyOrThrow } from './user-access-policy-store';

/**
 * check the user has sufficient priviledge to activate the route
 * @param resourceName
 * @param operation
 * @returns
 */
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
