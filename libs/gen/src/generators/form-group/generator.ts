import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { printFormGroupProperties } from '../utils';
import * as Metadata from '@webpackages/metadata';

export async function formGroupGenerator(tree: Tree) {
  const projectRoot = `libs/clients/form-groups/src/lib`;

  for (const [key, value] of Object.entries(Metadata)) {
    const N = names(key.replace('Metadata', ''));
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      ...N,
      properties: printFormGroupProperties(value),
    });
  }

  await formatFiles(tree);
}

export default formGroupGenerator;
