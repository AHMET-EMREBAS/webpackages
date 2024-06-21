import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { EntityGeneratorSchema } from './schema';
import { Metadata } from '@webpackages/types';
import * as ModelMetadatas from '@webpackages/metadata';
import {
  printImports,
  printPropertyNames,
  printViewProperties,
  printViewRelations,
} from '../utils';

function printProperties(metadata: Metadata) {
  const content: string[] = [];
  if (metadata.properties) {
    content.push(
      ...Object.entries(metadata.properties).map(([key, value]) => {
        return `
        @Column({ type:'${
          value.type
        }', required: ${!!value.required}, unique:${!!value.unique} })
        ${key}:${value.type === 'date' ? 'Date' : value.type};
        `;
      })
    );
  }
  return content.join('\n');
}

function printRelations(metadata: Metadata) {
  const content: string[] = [];
  if (metadata.relations) {
    content.push(
      ...Object.entries(metadata.relations).map(([key, value]) => {
        return `
        @Relation({ relationType:'${value.relationType}', target:${
          value.targetName
        } })
        ${key}:${value.targetName}${value.relationType === 'many' ? '[]' : ''};
        `;
      })
    );
  }
  return content.join('\n');
}

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const projectRoot = `libs/entities/src/lib`;

  const metadatas = Object.entries(ModelMetadatas);

  if (options.name === 'print-all') {
    for (const [key, value] of metadatas) {
      generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...names(key.replace('Metadata', '')),
        imports: printImports(value),
        properties: printProperties(value),
        relations: printRelations(value),
        propertyNames: printPropertyNames(value),
        viewProperties: printViewProperties(value), //viewProperties
        viewRelations: printViewRelations(value), //viewRelations
      });
    }
  } else {
    const [key, value] = Object.entries(ModelMetadatas).find(([key, value]) =>
      names(key).fileName.startsWith(options.name)
    );
    if (key && value) {
      generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...names(key.replace('Metadata', '')),
        imports: printImports(value),
        properties: printProperties(value),
        relations: printRelations(value),
        propertyNames: printPropertyNames(value),
        viewProperties: printViewProperties(value), //viewProperties
        viewRelations: printViewRelations(value), //viewRelations
      });
      return;
    }
    throw new Error('metadata not found!');
  }
  await formatFiles(tree);
}

export default entityGenerator;
