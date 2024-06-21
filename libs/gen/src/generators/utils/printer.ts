import { Metadata } from '@webpackages/types';

export function printPropertyNames(m: Metadata) {
  if (m.properties) {
    return Object.keys(m.properties);
  }
}

export function printRelationPropertyNames(m: Metadata) {
  if (m.properties) {
    return Object.keys(m.relations);
  }
}

export function printSelectedRelations(m: Metadata) {
  if (m.relations) {
    return Object.entries(m.relations)
      .map(([key, value]) => {
        if (value.viewColumns) {
          return `.addRelationColumns(${value.targetName}, ${JSON.stringify(
            value.viewColumns
          )})`;
        }
        return '';
      })
      .join('\n');
  }
}
