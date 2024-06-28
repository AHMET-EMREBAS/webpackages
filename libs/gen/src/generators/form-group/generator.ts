import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import {
  printFormGroupProperties,
  printUpdateFormGroupProperties,
} from '../utils';
import * as Metadata from '@webpackages/metadata';
import { FormGroupGeneratorSchema } from './schema';

export async function formGroupGenerator(
  tree: Tree,
  options: FormGroupGeneratorSchema
) {
  const projectRoot = `libs/clients/form-groups/src/lib`;

  if (options.name === 'print-all') {
    for (const [key, value] of Object.entries(Metadata)) {
      const N = names(key.replace('Metadata', ''));
      generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...N,
        properties: printFormGroupProperties(value),
        updateProperties: printUpdateFormGroupProperties(value),
      });
    }
    await formatFiles(tree);
  } else {
    const [key, value] = Object.entries(Metadata).find(([key, value]) =>
      names(key).fileName.startsWith(options.name)
    );
    if (key && value) {
      const N = names(key.replace('Metadata', ''));
      generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...N,
        properties: printFormGroupProperties(value),
        updateProperties: printUpdateFormGroupProperties(value),
      });
      await formatFiles(tree);
    }
  }
}

export default formGroupGenerator;
