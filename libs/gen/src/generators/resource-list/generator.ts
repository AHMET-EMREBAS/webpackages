import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import * as Metadata from '@webpackages/metadata';
export async function resourceListGenerator(tree: Tree) {
  const projectRoot = `libs/controllers/src/lib`;

  const keys = Object.keys(Metadata);

  const moduleName = (name: string) =>
    names(name.replace('Metadata', '')).className + 'Module';
  const filePath = (name: string) =>
    `'./${names(name.replace('Metadata', '')).fileName}';`;
  const __resouceList = keys.map(moduleName).join(',');

  const resourceList = `export const resourceList = [
  ${__resouceList}
  ]`;

  const resourceImports = keys
    .map((key) => {
      return `import { ${moduleName(key)} } from ${filePath(key)}`;
    })
    .join('\n');

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    resourceImports,
    resourceList,
  });
  await formatFiles(tree);
}

export default resourceListGenerator;
