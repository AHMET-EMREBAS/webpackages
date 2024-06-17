import { ApiResourcePath } from './api-resource-path';

describe('ApiResourcePathBuilder', () => {
  it('should build the api paths', () => {
    const entityPaths = new ApiResourcePath('sample', 'samples');

    expect(entityPaths.byId()).toBe('sample/:id');
    expect(entityPaths.plural()).toBe('samples');
    expect(entityPaths.singular()).toBe('sample');

    expect(entityPaths.relationId('category')).toBe('sample/:id/category/:rid');
    expect(entityPaths.relationPlural('categories')).toBe(
      'sample/:id/categories'
    );
    expect(entityPaths.relationSingular('category')).toBe(
      'sample/:id/category'
    );
  });
});
