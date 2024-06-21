import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { MetadataGeneratorSchema } from './schema';
import { ResourceNames } from '@webpackages/types';
export async function metadataGenerator(
  tree: Tree,
  options: MetadataGeneratorSchema
) {
  const projectRoot = `libs/metadata/src/lib`;

  for (const r of ResourceNames) {
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      ...names(r),
    });
  }
  await formatFiles(tree);
}

export default metadataGenerator;
