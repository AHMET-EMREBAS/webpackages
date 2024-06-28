import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { FormGeneratorSchema } from './schema';
import * as Metadata from '@webpackages/metadata';

export async function formGenerator(tree: Tree, options: FormGeneratorSchema) {
  const projectRoot = `libs/clients/forms/src/lib`;

  const entityEntties = Object.entries(Metadata);

  if (options.name === 'print-all') {
    for (const [key] of entityEntties) {
      const N = names(key.replace('Metadata', ''));
      generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...N,
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
      });
      await formatFiles(tree);
    }
  }
}

export default formGenerator;
