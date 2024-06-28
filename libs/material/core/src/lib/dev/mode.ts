import { LocalStoreController } from '../local-store';

export const devModeStore = LocalStoreController.create<boolean>('__isDevMode__');
