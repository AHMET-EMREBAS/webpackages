import { GroupName } from './group-name';
import { PropertyOptions, RelationOptions } from './property-options';

export class Metadata {
  groupName: GroupName;
  properties: Record<string, PropertyOptions>;
  relation: Record<string, RelationOptions>;
  
}
