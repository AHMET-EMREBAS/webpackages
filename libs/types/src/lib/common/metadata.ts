import { GroupName } from './group-name';
import { PropertyOptions, RelationOptionsMeta } from './property-options';

export class Metadata {
  groupName?: GroupName;
  properties?: Record<string, Partial<PropertyOptions>>;
  relations?: Record<string, RelationOptionsMeta>;
}
