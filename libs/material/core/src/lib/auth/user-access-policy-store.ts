import { AccessPolicy } from '@webpackages/types';
import { LocalStoreController } from '../local-store';

export const {
  get: getUserAccessPolicy,
  getOrThrow: getUserAccessPolicyOrThrow,
  set: setUserAccessPolicy,
  setIfNotExist: setUserAccessPolicyIfNotExist,
} = new LocalStoreController<AccessPolicy>('UserAccessPolicy');
