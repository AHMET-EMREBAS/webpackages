import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { FormGeneratorSchema } from './schema';
import * as Metadata from '@webpackages/metadata';

export async function formGenerator(tree: Tree, options: FormGeneratorSchema) {
  const projectRoot = `libs/${options.name}`;

  const entityEntties = Object.entries(Metadata);

  for (const [key] of entityEntties) {
    const N = names(key.replace('Metadata', ''));
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      ...N,
    });
  }
  await formatFiles(tree);
}

export default formGenerator;
