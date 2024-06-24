import { LocalStoreController } from '../local-store';

export const { get: isDevMode, set: setDevMode } =
  LocalStoreController.create<boolean>('__isDevMode__');
