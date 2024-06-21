import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { EntityGeneratorSchema } from './schema';
import { Metadata } from '@webpackages/types';
import * as ModelMetadatas from '@webpackages/metadata';

function printImports(metadata: Metadata) {
  const content: string[] = [];
  if (metadata.relations) {
    content.push(
      ...Object.values(metadata.relations).map((e) => {
        const n = names(e.targetName);
        return `import {${n.className}} from '../${n.fileName}';`;
      })
    );
  }
  return content.join('\n');
}

function printProperties(metadata: Metadata) {
  const content: string[] = [];
  if (metadata.properties) {
    content.push(
      ...Object.entries(metadata.properties).map(([key, value]) => {
        return `
        @Column({ type:'${
          value.type
        }', required: ${!!value.required}, unique:${!!value.unique} })
        ${key}:${value.type === 'date' ? 'Date' : value.type};
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
      ...Object.entries(metadata.properties).map(([key, value]) => {
        return `
        @Relation({ type:'${value.relationType}', target:${value.targetName} })
        ${key}:${value.targetName}${value.relationType === 'many' ? '[]' : ''};
        `;
      })
    );
  }
  return content.join('\n');
}

export async function entityGenerator(tree: Tree) {
  const projectRoot = `libs/entities/src/lib`;

  const metadatas = Object.entries(ModelMetadatas);
  for (const [key, value] of metadatas) {
    generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
      ...names(key.replace('Metadata', '')),
      imports: printImports(value),
      properties: printProperties(value),
      relations: printRelations(value),
    });
  }
  await formatFiles(tree);
}

export default entityGenerator;
