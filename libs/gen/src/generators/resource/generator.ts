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
// relationEntitiesImport
// relationEntities
export async function resourceGenerator(tree: Tree) {
  const projectRoot = `libs/controllers/src/lib`;
  const metadatas = Object.entries(ModelMetadatas);

  for (const [key, value] of metadatas) {
    const templateOptions = {
      ...names(key.replace('Metadata', '')),
      properties: printPropertiesForDto(value),
      relations: printRelationPropertiesForDto(value),
      updateProperties: printUpdatePropertiesForDto(value),
      updateRelations: printUpdateRelationPropertiesForDto(value),
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
  }
  await formatFiles(tree);
}

export default resourceGenerator;
