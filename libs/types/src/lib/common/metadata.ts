import { GroupName } from './group-name';
import { PropertyOptions } from './property-options';
import { names } from '@webpackages/utils';
export class Metadata {
  groupName?: GroupName;
  properties?: Record<string, Partial<PropertyOptions>>;
  relations?: Record<string, Partial<PropertyOptions>>;
}

/**
 * Provides all inputs
 * @param metadata
 * @returns
 */
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
        };
      } else if (value.type == 'object') {
        return {
          ...value,
          ...common,
        };
      }

      return {
        ...value,
        ...common,
        type: 'string',
        icon: 'info',
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
        class: value.class ?? 'order-6 w-4/12',
        inputType:
          value.inputType ||
          (value.relationType === 'many' ? 'search-many' : 'search'),
        tabIndex: value.tabIndex ?? 6,
        update: value.update == false ? false : true,
      } as PropertyOptions;
    }
  );

  return [...properties, ...relations];
}

/**
 * Only provide editable inputs
 * @param metadata
 * @returns
 */
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
          const prefix = value.label ? names(value.label).titleName : '';

          return value.viewColumns.map((vc) => {
            return {
              name: key + names(vc).className,
              label: prefix + ' ' + names(vc).titleName,
              tabIndex: value.tabIndex,
            } as PropertyOptions;
          });
        }
        return [];
      })
      .flat() || []),
  ].sort((p, c) => {
    return p.tabIndex > c.tabIndex ? 1 : p.tabIndex == c.tabIndex ? 0 : -1;
  });
}

/**
 * Only provide editable inputs
 * @param metadata
 * @returns
 */
export function toUpdateFormInputOptions(metadata: Metadata) {
  return toFormInputOptions(metadata).filter((e) => e.update);
}

/**
 * Only provide editable inputs
 * @param metadata
 * @returns
 */
export function toRawFormInputOptions(metadata: Metadata) {
  return toFormInputOptions(metadata).filter((e) => e.update);
}
