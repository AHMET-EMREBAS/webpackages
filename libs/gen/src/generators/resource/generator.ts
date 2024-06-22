import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import * as ModelMetadatas from '@webpackages/metadata';

import {
  printOrderablePropertyNames,
  printPropertiesForDto,
  printQueryProperties,
  printRelationPropertiesForDto,
} from '../utils';

export async function resourceGenerator(tree: Tree) {
  const projectRoot = `libs/controllers/src/lib`;
  const metadatas = Object.entries(ModelMetadatas);

  for (const [key, value] of metadatas) {
    const templateOptions = {
      ...names(key.replace('Metadata', '')),
      properties: printPropertiesForDto(value),
      relations: printRelationPropertiesForDto(value),
      orderablePropertyNames: printOrderablePropertyNames(value),
      searchablePropertyNames: printOrderablePropertyNames(value),
      queriableProperties: printQueryProperties(value),
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
