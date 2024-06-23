import { AccessPolicy } from '@webpackages/types';
import { LocalStoreController } from '../local-store';

export const {
  get: getUserAccessPolicy,
  getOrThrow: getUserAccessPolicyOrThrow,
  set: setUserAccessPolicy,
  setIfNotExist: setUserAccessPolicyIfNotExist,
} = LocalStoreController.create<AccessPolicy>('UserAccessPolicy');
