import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';

import * as Metadata from '@webpackages/metadata';
import { plural } from '@webpackages/utils';

export async function ngrxConfigGenerator(tree: Tree) {
  const projectRoot = `libs/clients/ngrx/src/lib`;

  const entityConfigs = Object.entries(Metadata)
    .map(([key, value]) => {
      return `${names(key.replace('Metadata', '')).className}:{}`;
    })
    .join(',');

  const pluralNames = Object.entries(Metadata)
    .map(([key, value]) => {
      return `${names(key.replace('Metadata', '')).className}:'${plural(
        names(key.replace('Metadata', '')).className
      )}'`;
    })
    .join(',');

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    entityConfigs,
    pluralNames,
  });

  await formatFiles(tree);
}

export default ngrxConfigGenerator;
