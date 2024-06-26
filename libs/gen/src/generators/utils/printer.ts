import { names } from '@nx/devkit';
import { Metadata, PropertyOptions } from '@webpackages/types';

export function uniqueItems(items: string[]) {
  return [...new Set(items)];
}

export function unifyAndJoin(items: string[]) {
  return uniqueItems(items).join('\n');
}
/**
 *
 * @param property
 * @returns [] | ''
 */
export function printArrayIndicatorOfProperty(
  property: Partial<PropertyOptions>
) {
  return property.isArray ? '[]' : '';
}

export function isArrayRelation(relation: Partial<PropertyOptions>) {
  return relation.relationType === 'many' ? true : false;
}

/**
 *
 * @param relation
 * @returns [] | ''
 */
export function printArrayIndicatorOfRelation(
  relation: Partial<PropertyOptions>
) {
  return isArrayRelation(relation) ? '[]' : '';
}

/**
 *
 * @param relation
 * @returns ClassName | ClassName[]
 */
export function printRelationTypeInEntity(relation: Partial<PropertyOptions>) {
  const type = relation.targetName;
  const isArray = printArrayIndicatorOfRelation(relation);
  return `${type}${isArray}`;
}

/**
 *
 * @param relation
 * @returns number | IDDto[]
 */
export function printRelationTypeInDto(relation: Partial<PropertyOptions>) {
  if (isArrayRelation(relation)) {
    return `IDDto[]`;
  } else {
    return 'number';
  }
}

/**
 *
 * @param property
 * @returns number | boolean | Date | string | ObjectName | ?[]
 */
export function printPropertyType(property: Partial<PropertyOptions>) {
  const type =
    property.type === 'date'
      ? 'Date'
      : property.type === 'object'
      ? property.targetName
      : property.type;
  return type + printArrayIndicatorOfProperty(property);
}

/**
 *
 * @param m - Metadata
 * @returns ["name1", "name2", ...]
 *
 */
export function printPropertyNames(m: Metadata) {
  if (m.properties) {
    return JSON.stringify(Object.keys(m.properties));
  }
  return '';
}

/**
 *
 * @param m - Metadata
 * @returns array string as string
 */
export function printRelationPropertyNames(m: Metadata) {
  if (m.properties) {
    return JSON.stringify(Object.keys(m.relations));
  }
  return '';
}

// export function printQueryProperties(m: Metadata) {
//   if (m.properties) {
//     const result = Object.entries(m.properties).map(([key, value]) => {
//       return `@ViewColumn() ${key}: ${printPropertyType(value)};`;
//     });
//     return unifyAndJoin(result);
//   }

//   return '';
// }

export function printViewProperties(m: Metadata) {
  if (m.properties) {
    const result = Object.entries(m.properties).map(([key, value]) => {
      return `@ViewColumn() ${key}: ${printPropertyType(value)};`;
    });
    return unifyAndJoin(result);
  }

  return '';
}

export function printViewRelations(m: Metadata) {
  if (m.relations) {
    const result = Object.entries(m.relations).map(([key, value]) => {
      const prefix = names(key).propertyName;

      const __printViews = (cols: string[]) => {
        const result = cols.map((e) => {
          const suffix = names(e).className;
          return `@ViewColumn() ${prefix}${suffix}: ${value.targetName}['${e}'];`;
        });
        return unifyAndJoin(result);
      };

      const builtinViewColumns = ['id', 'active'];

      if (value.viewColumns && value.viewColumns.length > 0) {
        return __printViews([...value.viewColumns, ...builtinViewColumns]);
      } else {
        return __printViews(builtinViewColumns);
      }
    });

    return unifyAndJoin(result);
  }

  return '';
}

export function printPropertyImports(m: Metadata) {
  if (m.properties) {
    const result = Object.values(m.properties)
      .filter((e) => {
        return e.type === 'object';
      })
      .map((e) => {
        if (!e.targetName) {
          console.error(m);
          console.error(`targetName is required for imports`);
          return;
        }
        return `import {${e.targetName}} from '@webpackages/types';`;
      })
      .filter((e) => e);

    return unifyAndJoin(result);
  }
  return '';
}

export function printRelationImports(m: Metadata) {
  if (m.relations) {
    const result = Object.values(m.relations).map((e) => {
      return `import { ${e.targetName} } from '../${
        names(e.targetName).fileName
      }'`;
    });

    return unifyAndJoin(result);
  }
  return '';
}

export function printRelationImportsFromResource(m: Metadata) {
  if (m.relations) {
    const r1 = new Set(
      Object.values(m.relations).map((e) => {
        return `import { ${e.targetName},${e.targetName}View } from '@webpackages/entities'`;
      })
    );

    return [...r1].join('\n');
  }

  return '';
}

export function printRelationEntitiesFromResource(m: Metadata) {
  const r1 = [
    ...new Set(
      Object.values(m.relations || {}).map((e) => {
        return `${e.targetName}, ${e.targetName}View`;
      })
    ),
  ].join(',');

  return r1;
}

/**
 * Print required imports for entity
 *
 * @param m
 * @returns
 */
export function printEntityImports(m: Metadata) {
  return [printPropertyImports(m), printRelationImports(m)].join('\n');
}

export function printEntityColumns(metadata: Metadata) {
  if (metadata.properties) {
    const result = Object.entries(metadata.properties).map(([key, value]) => {
      const propertyType = printPropertyType(value);

      const __type =
        value.type != undefined ? `type:'${value.type}'` : undefined;

      const __required =
        value.required != undefined ? `required:${value.required}` : undefined;

      const __unique =
        value.unique != undefined ? `unique:${value.unique}` : undefined;

      const __format =
        value.format != undefined ? `format:'${value.format}'` : undefined;

      const options = [__type, __required, __unique, __format]
        .filter((e) => e)
        .join(',');

      return `@Column({ ${options} }) ${key}:${propertyType} `;
    });

    return unifyAndJoin(result);
  }
  return '';
}

export function printRelationColumns(metadata: Metadata) {
  if (metadata.relations) {
    const result = Object.entries(metadata.relations).map(([key, value]) => {
      const type = printRelationTypeInEntity(value);

      const __options = [
        `relationType:'${value.relationType}'`,
        `target:${value.targetName} `,
      ].join(', ');

      return `@Relation({${__options}}) ${key}:${type};`;
    });

    return unifyAndJoin(result);
  }
  return '';
}

/**
 * Print dto properties
 * @param m
 * @returns DTO properties
 */
export function printPropertiesForDto(m: Metadata) {
  if (m.properties) {
    const result = Object.entries(m.properties).map(([key, value]) => {
      const decorator = () => {
        return `@Property(${JSON.stringify(value || {})})`;
      };

      return `${decorator()} ${key}:${printPropertyType(value)};`;
    });

    return unifyAndJoin(result);
  }

  return '';
}
/**
 * Print dto properties
 * @param m
 * @returns DTO properties
 */
export function printUpdatePropertiesForDto(m: Metadata) {
  if (m.properties) {
    const result = Object.entries(m.properties)

      .filter(([key, value]) => value.update != false)
      .map(([key, value]) => {
        const { required, ...nValue } = value;
        const decorator = () => {
          return `@Property(${JSON.stringify(nValue || {})})`;
        };

        return `${decorator()} ${key}:${printPropertyType(value)};`;
      });

    return unifyAndJoin(result);
  }

  return '';
}

export function printRelationPropertiesForDto(m: Metadata) {
  // import { IDDto } from '@webpackages/database';

  if (m.relations)
    return Object.entries(m.relations)
      .map(([key, value]) => {
        const propertyName = () => {
          return value.relationType === 'many' ? key : key;
        };
        const isRequired = () => {
          return value.relationType === 'owner' ||
            value.relationType === 'secure-owner'
            ? ',required: true'
            : '';
        };

        const decoratorsOptions = () => {
          return value.relationType === 'many'
            ? `{type:"object", target:IDDto, isArray:true ${isRequired()} }`
            : `{ type:'number' ${isRequired()} }`;
        };

        const decorator = () => {
          return `@Property(${decoratorsOptions()})`;
        };

        const type = () => {
          return value.relationType === 'many' ? 'IDDto' + '[]' : 'IDDto';
        };

        return `
      ${decorator()}
      ${propertyName()}:${type()};`;
      })
      .join('\n');

  return '';
}

export function printUpdateRelationPropertiesForDto(m: Metadata) {
  // import { IDDto } from '@webpackages/database';

  if (m.relations)
    return Object.entries(m.relations)
      .filter(([key, value]) => value.update != false)
      .map(([key, value]) => {
        const propertyName = () => {
          return value.relationType === 'many' ? key : key;
        };

        const decoratorsOptions = () => {
          return value.relationType === 'many'
            ? `{type:"object", target:IDDto, isArray:true }`
            : `{ type:'number'}`;
        };

        const decorator = () => {
          return `@Property(${decoratorsOptions()})`;
        };

        const type = () => {
          return value.relationType === 'many' ? 'IDDto' + '[]' : 'IDDto';
        };

        return `
      ${decorator()}
      ${propertyName()}:${type()};`;
      })
      .join('\n');

  return '';
}

export function __property_printOrderablePropertyNames(m: Metadata) {
  if (m.properties) {
    const result = Object.entries(m.properties).map(([key]) => {
      return `'${key}'`;
    });
    return result.filter((e) => e).join(',');
  }
  return '';
}

export function __relation_printOrderablePropertyNames(m: Metadata) {
  if (m.relations) {
    const result = Object.entries(m.relations).map(([key, value]) => {
      if (value.viewColumns && value.viewColumns.length > 0) {
        return value.viewColumns
          .filter((e) => e)
          .map((e) => {
            return `'${names(key).propertyName + names(e).className}'`;
          })
          .join(',');
      }
      return undefined;
    });
    return result.filter((e) => e).join(',');
  }
}

export function printOrderablePropertyNames(m: Metadata) {
  const result = [
    __property_printOrderablePropertyNames(m),
    __relation_printOrderablePropertyNames(m),
  ]
    .filter((e) => e)
    .join(',');

  console.log(result);
  return `[ ${result} ]`;
}

export function __property__printQueryProperties(m: Metadata) {
  if (m.properties) {
    const result = Object.entries(m.properties).map(([key]) => {
      return `@QueryProperty() ${key}: string`;
    });

    return unifyAndJoin(result);
  }
  return '';
}

export function __relation__printQueryProperties(m: Metadata) {
  if (m.relations) {
    const result = Object.entries(m.relations).map(([key, value]) => {
      const cols = ['id', 'active', ...(value.viewColumns ?? [])];
      return cols
        .map((k) => {
          const name = names(key).propertyName + names(k).className;
          return `@QueryProperty() ${name}: string`;
        })
        .join('\n');
      return '';
    });

    return unifyAndJoin(result);
  }
  return '';
}

export function printQueryProperties(m: Metadata) {
  return unifyAndJoin([
    __property__printQueryProperties(m),
    __relation__printQueryProperties(m),
  ]);
}
