import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import * as Metadata from '@webpackages/metadata';
export async function routesGenerator(tree: Tree) {
  const projectRoot = `libs/clients/routes/src/lib`;

  for (const [key] of Object.entries(Metadata)) {
    const N = names(key.replace('Metadata', ''));
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      ...N,
    });
  }

  await formatFiles(tree);
}

export default routesGenerator;
