import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { graphqlObjectGenerator } from './generator';
import { GraphqlObjectGeneratorSchema } from './schema';

describe('graphql-object generator', () => {
  let tree: Tree;
  const options: GraphqlObjectGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await graphqlObjectGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
