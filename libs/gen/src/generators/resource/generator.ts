import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import * as ModelMetadatas from '@webpackages/metadata';

import {
  printOrderablePropertyNames,
  printPropertiesForDto,
  printPropertyImports,
  printQueryProperties,
  printRelationEntitiesFromResource,
  printRelationImportsFromResource,
  printRelationPropertiesForDto,
  printUpdatePropertiesForDto,
  printUpdateRelationPropertiesForDto,
} from '../utils';
import { ResourceGeneratorSchema } from './schema';
import { Metadata } from '@webpackages/types';
// relationEntitiesImport
// relationEntities
export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const projectRoot = `libs/controllers/src/lib`;
  const metadatas = Object.entries(ModelMetadatas);

  const printIt = (key: string, value: Metadata) => {
    const templateOptions = {
      ...names(key.replace('Metadata', '')),

      properties: printPropertiesForDto(value),
      relations: printRelationPropertiesForDto(value),

      updateProperties: printUpdatePropertiesForDto(value),
      updateRelations: printUpdateRelationPropertiesForDto(value),

      //
      orderablePropertyNames: printOrderablePropertyNames(value),
      searchablePropertyNames: printOrderablePropertyNames(value),
      queriableProperties: printQueryProperties(value),
      imports: printPropertyImports(value),

      //
      relationEntitiesImport: printRelationImportsFromResource(value),
      relationEntities: printRelationEntitiesFromResource(value),
    };

    generateFiles(
      tree,
      path.join(__dirname, 'files'),
      projectRoot,
      templateOptions
    );
  };

  if (options.name === 'print-all') {
    for (const [key, value] of metadatas) {
      printIt(key, value);
    }
  } else {
    const [key, value] = metadatas.find(([key, value]) =>
      names(key).fileName.startsWith(options.name)
    );

    if (key && value) {
      printIt(key, value);
    } else {
      throw new Error('Could not find the metadata!');
    }
  }
  await formatFiles(tree);
}

export default resourceGenerator;
