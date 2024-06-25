import { names } from '@webpackages/utils';

export enum PathParam {
  ID_KEY = 'id',
  RID_KEY = 'rid',
  EN_KEY = 'en',
  RN_KEY = 'rn',
  COUNT = 'count',

  ID_DEF = ':id',
  RID_DEF = ':rid',
  EN_DEF = ':en',
  RN_DEF = ':rn',
}

export type PathBuilderOptions = {
  singularName: string;
  /** @deprecated */ pluralName?: string;
  prefix?: string;
};

/**
 * @example
 * const rp = new ResourcePathBuilder({
 *   singularName: 'Product',
 *   pluralName: 'Products',
 *   prefix: '',
 * });
 *
 * rp.id(); // output: `product/:id`
 * rp.singular(); // output: `product`
 * rp.plural(); // output: `products/:id`
 * rp.idRelation('category'); // output: `product/:id/category/:rid`
 * rp.singularRelation('category'); // output: `product/:id/category`
 * rp.pluralRelation('categories'); // output: `product/:id/categories`
 *  */
export class PathBuilder {
  protected readonly singularPath: string;
  protected readonly pluralPath: string;
  protected readonly prefix: string;

  constructor(options: PathBuilderOptions) {
    const { singularName, prefix } = options;

    this.singularPath = names(singularName).fileName;
    this.pluralPath = names(names(singularName).pluralName).fileName;
    this.prefix = prefix || '';
  }

  private __singular(...paths: string[]) {
    return [this.prefix, this.singularPath, ...paths]
      .filter((e) => e)
      .join('/');
  }
  private __plural(...paths: string[]) {
    return [this.prefix, this.pluralPath, ...paths].filter((e) => e).join('/');
  }

  /**
   * - `GET` `/singular/{id}` - Get item by id
   * - `PUT` `/singular/{id}` - Update item by id and body
   * - `DELETE` `/singular/{id}` - Delete item by id
   * - `POST` `/singular/{id}` - Get metadata, Force update, Activate, Update specific field
   */
  id() {
    return this.__singular(PathParam.ID_DEF);
  }

  /**
   * - `GET` `/plural` - Query all
   * - `POST` `/plural` - Create many
   */
  plural() {
    return this.__plural();
  }

  /**
   * - `GET`  `/singular` - Get metadata
   * - `POST` `/singular` - Create one
   */
  singular() {
    return this.__singular();
  }

  /**
   * - `GET` `/singular/{id}/{singularRelation}` - Get relation metadata
   * - `POST` `/singular/{id}/{singularRelation}` - Create one relation
   */
  singularRelation(singularRelationName: string) {
    return this.__singular(PathParam.ID_DEF, singularRelationName);
  }

  /**
   * @param pluralRelationName - plural relation name
   * - `GET` `/singular/{id}/{pluralRelationName}` - Query all
   * - `POST` `/singular/{id}/{pluralRelationName}` - Create many
   */
  pluralRelation(pluralRelationName: string) {
    return this.__singular(PathParam.ID_DEF, pluralRelationName);
  }

  /**
   * @param singularRelationName - singular relation name
   * - `GET` `/singular/{id}/{singularRelationName}/:rid` - Query all
   * - `POST` `/singular/{id}/{singularRelationName}/:rid` - Create many
   */
  idRelation(singularRelationName: string) {
    return this.__singular(
      PathParam.ID_DEF,
      singularRelationName,
      PathParam.RID_DEF
    );
  }
  /**
   *
   * - `GET` `plural/count` - Query count
   */
  count() {
    return this.__plural(PathParam.COUNT);
  }
}
