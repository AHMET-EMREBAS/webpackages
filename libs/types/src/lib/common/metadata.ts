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
      const common: Partial<PropertyOptions> = {
        name: key,
        label: value.label || names(key).titleName,
        class: value.class
          ? value.class
          : value.conditionalClass
          ? undefined
          : 'w-full',
        update: value.update == false ? false : true,
        icon: value.icon ?? 'info',
      };

      if (value.type === 'string') {
        return {
          ...value,
          ...common,
          minLength: value.minLength ?? 0,
          maxLength: value.maxLength ?? 1_000,
          tabIndex: value.tabIndex ?? 1,
        };
      } else if (value.type === 'number') {
        return {
          ...value,
          ...common,
          minimum: value.minimum ?? Number.MIN_SAFE_INTEGER,
          maximum: value.maximum ?? Number.MAX_SAFE_INTEGER,
          icon: value.icon ?? 'numbers',
        };
      } else if (value.type === 'date') {
        return { ...value, ...common };
      } else if (value.type === 'boolean') {
        return {
          ...value,
          ...common,
          inputType: value.inputType ?? 'checkbox',
        };
      } else if (value.type == 'object') {
        return {
          ...value,
          ...common,
          inputType: 'select-many',
        };
      }

      return {
        ...value,
        ...common,
        type: 'string',
        inputType: 'text',
        incon: 'info',
      } as Partial<PropertyOptions>;
    }
  ) as PropertyOptions[];

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
        label: names(value.label || key).titleName,
      } as PropertyOptions;
    }) || []),
    ...(Object.entries(metadata.relations || {})
      .map(([key, value]) => {
        if (value.viewColumns) {
          return value.viewColumns.map((vc) => {
            return {
              name: key + names(vc).className,
              label: names(key).titleName + ' ' + names(vc).titleName,
            } as PropertyOptions;
          });
        }
        return [];
      })
      .flat() || []),
  ];
}

export function toUpdateFormInputOptions(metadata: Metadata) {
  return toFormInputOptions(metadata).filter((e) => e.update);
}
