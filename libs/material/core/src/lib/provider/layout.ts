import { NavListItems } from '@webpackages/types';
import { createValueProvider } from './create-provider';

export const {
  default: provideDefaultNavListItems,
  provide: provideNavListItems,
  token: getNavListItemsToken,
} = createValueProvider<NavListItems>('NavListItems', []);

export const {
  default: provideDefaultSubModuleNavListItems,
  provide: provideSubModuleNavListItems,
  token: getSubModuleNavListItemsToken,
} = createValueProvider<NavListItems>('SubModuleSubModuleNavListItems', [
  { route: ['table'], label: `View`, icon: 'table' },
  { route: ['editor'], label: `New`, icon: 'add' },
]);
