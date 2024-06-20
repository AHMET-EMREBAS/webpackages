import { ResourcePathBuilder } from './resource-path';

describe('ResourcePathBuilderBuilder', () => {
  it('should build the api paths', () => {
    const entityPaths = new ResourcePathBuilder({ singularName: 'sample' });

    expect(entityPaths.id()).toBe('sample/:id');
    expect(entityPaths.plural()).toBe('samples');
    expect(entityPaths.singular()).toBe('sample');

    expect(entityPaths.idRelation('category')).toBe('sample/:id/category/:rid');
    expect(entityPaths.pluralRelation('categories')).toBe(
      'sample/:id/categories'
    );
    expect(entityPaths.singularRelation('category')).toBe(
      'sample/:id/category'
    );
  });
});
