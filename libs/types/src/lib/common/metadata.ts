import { GroupName } from './group-name';
import { PropertyOptions } from './property-options';
import { names } from '@webpackages/utils';
export class Metadata {
  groupName?: GroupName;
  properties?: Record<string, Partial<PropertyOptions>>;
  relations?: Record<string, Partial<PropertyOptions>>;
}

export function toFormInputOptions(
  metadata: Metadata
): Partial<PropertyOptions>[] {
  const properties = Object.entries(metadata.properties || {}).map(
    ([key, value]) => {
      return {
        name: key,
        ...value,
        label: value.label || names(key).titleName,
        class: value.class
          ? value.class
          : value.conditionalClass
          ? undefined
          : 'w-full',
        icon: value.icon ?? 'info',
        minLength: value.minLength ?? 0,
        maxLength: value.maxLength ?? 1_000,
        maximum: value.maximum,
        minimum: value.minimum,
        tabIndex: value.tabIndex ?? 1,
      };
    }
  );

  const relations = Object.entries(metadata.relations || {}).map(
    ([key, value]) => {
      return {
        name: key,
        label: value.targetName,
        resourceName: names(value.targetName!).fileName,
        resourceLabelProperty: value.resourceLabelProperty,
        class: 'w-full',
        inputType: value.relationType === 'many' ? 'search-many' : 'search',
        tabIndex: value.tabIndex ?? 1,
      } as PropertyOptions;
    }
  );

  return [...properties, ...relations];
}

export function toTableColumnOptions(
  metadata: Metadata
): Partial<PropertyOptions>[] {
  return [
    ...(Object.entries(metadata.properties || {}).map(([key, value]) => {
      return {
        ...value,
        name: key,
        label: value.label || key,
      } as PropertyOptions;
    }) || []),
    ...(Object.entries(metadata.relations || {})
      .map(([key, value]) => {
        if (value.viewColumns) {
          return value.viewColumns?.map((vc) => {
            return {
              name: key + names(vc).className,
            } as PropertyOptions;
          });
        }
        return [];
      })
      .flat() || []),
  ];
}
