import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { ngrxConfigGenerator } from './generator';
import { NgrxConfigGeneratorSchema } from './schema';

describe('ngrx-config generator', () => {
  let tree: Tree;
  const options: NgrxConfigGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ngrxConfigGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
