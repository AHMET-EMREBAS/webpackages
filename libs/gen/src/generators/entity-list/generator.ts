import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import * as Metadata from 'reflect-metadata';

export async function entityListGenerator(tree: Tree) {
  const projectRoot = `libs/entities/src/lib`;

  const entityImports = Object.entries(Metadata)
    .map(([key, value]) => {
      const N = names(key.replace('Metadata', ''));
      return `import {${N.className}} from './${N.fileName}';`;
    })
    .join(',');

  const entityList =
    `export const entityList = [\n` +
    Object.entries(Metadata)
      .map(([key, value]) => {
        return names(key.replace('Metadata', '')).className;
      })
      .join(',') +
    '\n]';

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    entityImports,
    entityList,
  });

  await formatFiles(tree);
}

export default entityListGenerator;
