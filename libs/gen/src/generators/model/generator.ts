import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ModelGeneratorSchema } from './schema';
import { Metadata } from '@webpackages/types';
import * as ModelMetadatas from '@webpackages/metadata';

function printImports(metadata: Metadata) {
  const content: string[] = [];
  if (metadata.relations) {
    content.push(
      ...Object.values(metadata.relations).map((e) => {
        const n = names(e.targetName);
        return `import { I${n.className} } from './${n.fileName}';`;
      })
    );
  }

  if (metadata.properties) {
    content.push(
      `import { ${Object.values(metadata.properties)
        .filter((e) => e.targetName)
        .map((e) => e)
        .join(', ')} } from '@webpackages/types';`
    );
  }
  return [...new Set(content)].join('\n');
}

function printProperties(metadata: Metadata) {
  const content: string[] = [];
  if (metadata.properties) {
    content.push(
      ...Object.entries(metadata.properties).map(([key, value]) => {
        return `

        ${key}: ${
          value.type === 'date'
            ? 'Date'
            : value.type === 'object'
            ? value.targetName
            : value.type
        } ${value.isArray ? '[]' : ''};
        `;
      })
    );
  }
  return content.join('\n');
}

function printRelations(metadata: Metadata) {
  const content: string[] = [];
  if (metadata.relations) {
    content.push(
      ...Object.entries(metadata.relations).map(([key, value]) => {
        return `
        ${key}: I${value.targetName}${
          value.relationType === 'many' ? '[]' : ''
        };
        `;
      })
    );
  }
  return content.join('\n');
}

export async function modelGenerator(
  tree: Tree,
  options: ModelGeneratorSchema
) {
  const projectRoot = `libs/models/src/lib`;

  const metadatas = Object.entries(ModelMetadatas);

  if (options.name === 'print-all') {
    for (const [key, value] of metadatas) {
      generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...names(key.replace('Metadata', '')),
        imports: printImports(value),
        properties: printProperties(value),
        relations: printRelations(value),
      });
    }
  } else {
    const [key, value] = Object.entries(ModelMetadatas).find(([key]) =>
      names(key).fileName.startsWith(options.name)
    );
    if (key && value) {
      generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
        ...names(key.replace('Metadata', '')),
        imports: printImports(value),
        properties: printProperties(value),
        relations: printRelations(value),
      });
      return;
    }
    throw new Error('metadata not found!');
  }
  await formatFiles(tree);
}

export default modelGenerator;
