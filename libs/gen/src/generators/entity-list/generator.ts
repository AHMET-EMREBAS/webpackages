import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import * as Metadata from '@webpackages/metadata';

export async function entityListGenerator(tree: Tree) {
  const projectRoot = `libs/entities/src/lib`;

  const entityImports = Object.entries(Metadata)
    .map(([key, value]) => {
      const N = names(key.replace('Metadata', ''));
      return `import {${N.className}, ${N.className}Subscriber,${N.className}View, } from './${N.fileName}';`;
    })
    .join('\n');

  const entityList =
    `export const entityList = [\n` +
    Object.entries(Metadata)
      .map(([key, value]) => {
        return [
          names(key.replace('Metadata', '')).className,
          names(key.replace('Metadata', '')).className + 'View',
        ].join(',');
      })
      .join(',') +
    '\n]';

  const subscriberList =
    `export const subscriberList = [\n` +
    Object.entries(Metadata)
      .map(([key, value]) => {
        return names(key.replace('Metadata', '')).className + 'Subscriber';
      })
      .join(',') +
    '\n]';

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    entityImports,
    entityList,
    subscriberList,
  });

  await formatFiles(tree);
}

export default entityListGenerator;
