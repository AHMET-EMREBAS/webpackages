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

// const rp = new ResourcePathBuilder({
//   singularName: 'Product',
//   pluralName: 'Products',
//   prefix: '',
// });

// // output: `product/:id`
// const ID_PATH = rp.id();

// // output: `product`
// const SINGULAR_PATH = rp.singular();

// // output: `products/:id`
// const PLURAL_PATH = rp.plural();

// // output: `product/:id/category/:rid`
// const ID_RELATION_PATH = rp.idRelation('category');

// // output: `product/:id/category`
// const SINGULAR_RELATION_PATH = rp.singularRelation('category');

// // output: `product/:id/categories`
// const PLURAL_RELATION_PATH = rp.pluralRelation('categories');

