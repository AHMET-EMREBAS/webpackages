import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { FormGroupGeneratorSchema } from './schema';
import { printFormGroupProperties } from '../utils';
import { Metadata } from '@webpackages/types';
export async function formGroupGenerator(
  tree: Tree,
  options: FormGroupGeneratorSchema
) {
  // libs\clients\form-groups\src\lib
  const projectRoot = `libs/clients/form-groups/src/lib`;

  const N = names(options.name);

  const gen = (metadata: Metadata) =>
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      ...N,
      properties: printFormGroupProperties(metadata),
    });

  if (N.fileName === 'print-all') {
    for (const [key, value] of Object.entries(Metadata)) {
      gen(value);
    }
  } else {
    const metadata = Object.entries(Metadata).find(
      ([key, value]) => names(key).propertyName === N.propertyName
    )[1];

    if (metadata != undefined) {
      gen(metadata);
      // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      //   ...N,
      //   properties: printFormGroupProperties(metadata),
      // });
    }
    await formatFiles(tree);
  }
}

export default formGroupGenerator;
