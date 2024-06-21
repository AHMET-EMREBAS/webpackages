import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { EntityGeneratorSchema } from './schema';
import * as ModelMetadatas from '@webpackages/metadata';
import {
  printEntityColumns,
  printImports,
  printPropertyNames,
  printRelationColumns,
  printViewProperties,
  printViewRelations,
} from '../utils';

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
        properties: printEntityColumns(value),
        relations: printRelationColumns(value),
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
        properties: printEntityColumns(value),
        relations: printRelationColumns(value),
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
