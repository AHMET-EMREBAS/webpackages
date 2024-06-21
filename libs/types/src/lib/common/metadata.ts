import { GroupName } from './group-name';
import { PropertyOptions, RelationOptions } from './property-options';

export class Metadata {
  groupName?: GroupName;
  properties?: Record<string, Partial<PropertyOptions>>;
  relations?: Record<string, Partial<RelationOptions>>;
}
