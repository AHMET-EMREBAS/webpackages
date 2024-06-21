import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ResourceGeneratorSchema } from './schema';
import { Metadata } from '@webpackages/types';

import * as ModelMetadatas from '@webpackages/metadata';

// properties
// relations
// propertyNames
// queryProperties
// searchProperties

function printProperties(metadata: Metadata) {
  if (metadata.properties)
    return Object.entries(metadata.properties)
      .map(([key, value]) => {
        const decorator = () => {
          return `@Property(${JSON.stringify(value)})`;
        };

        const type = () => {
          return value.type === 'date'
            ? 'Date'
            : value.type === 'object'
            ? 'any'
            : value.type;
        };

        return `
    ${decorator()}
    ${key}:${type()};
    `;
      })
      .join('\n');

  return '';
}

function printRelations(metadata: Metadata) {
  // import { IDDto } from '@webpackages/database';

  if (metadata.relations)
    return Object.entries(metadata.relations)
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

function printPropetyNames(metadata: Metadata) {
  return JSON.stringify([
    ...Object.entries(metadata.properties || {}).map(([key]) => {
      return key;
    }),
    ...Object.entries(metadata.relations || {}).map(([key]) => {
      return key;
    }),
  ]);
}

function printQueryProperties(meta: Metadata) {
  return [
    ...Object.entries(meta.properties || {}).map(([key]) => {
      return `@QueryProperty() ${key}: string;`;
    }),
    ...Object.entries(meta.relations || {}).map(([key]) => {
      return `@QueryProperty() ${key}: string;`;
    }),
  ].join('\n');
}

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const projectRoot = `libs/controllers/src/lib`;
  const metadatas = Object.entries(ModelMetadatas);

  for (const [key, value] of metadatas) {
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      ...names(key.replace('Metadata', '')),
      properties: printProperties(value),
      relations: printRelations(value),
      propertyNames: printPropetyNames(value),
      queryProperties: printQueryProperties(value),
      searchProperties: printPropetyNames(value),
    });
  }
  await formatFiles(tree);
}

export default resourceGenerator;
