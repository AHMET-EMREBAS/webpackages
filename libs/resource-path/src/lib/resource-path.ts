import { names } from '@nx/devkit';

export enum PathParam {
  ID_KEY = 'id',
  RID_KEY = 'rid',
  EN_KEY = 'en',
  RN_KEY = 'rn',

  ID_DEF = ':id',
  RID_DEF = ':rid',
  EN_DEF = ':en',
  RN_DEF = ':rn',
}

export type ResourcePathBuilderOptions = {
  singularName: string;
  pluralName?: string;
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
export class ResourcePathBuilder {
  protected readonly _sp: string;
  protected readonly _pp: string;
  protected readonly _pxp: string;

  constructor(protected readonly options: ResourcePathBuilderOptions) {
    const { singularName, pluralName, prefix } = options;

    this._sp = names(singularName).fileName;
    this._pp = names(pluralName || singularName + 's').fileName;
    this._pxp = prefix || '';
  }

  /**
   * Singular path
   */
  protected sp() {
    return this._sp;
  }

  /**
   * Plural path
   */
  protected pp() {
    return this._pp;
  }

  /**
   * Prefix path
   */
  protected pxp() {
    return this._pxp;
  }

  /**
   * - `GET` `/singular/:id` - Get item by id
   * - `PUT` `/singular/:id` - Update item by id and body
   * - `DELETE` `/singular/:id` - Delete item by id
   * - `POST` `/singular/:id` - Get metadata, Force update, Activate, Update specific field
   */
  id() {
    return `${this.pxp()}${this._sp}/${PathParam.ID_DEF}`;
  }

  /**
   * - `GET` `/plural` - Query all
   * - `POST` `/plural` - Create many
   */
  plural() {
    return `${this.pxp()}${this._pp}`;
  }

  /**
   * - `GET`  `/singular` - Get metadata
   * - `POST` `/singular` - Create one
   */
  singular() {
    return `${this.pxp()}${this._sp}`;
  }

  /**
   * - `GET` `/singular/:id/:singularRelation` - Get relation metadata
   * - `POST` `/singular/:id/:singularRelation` - Create one relation
   */
  singularRelation(srn: string) {
    return `${this.pxp()}${this.id()}/${srn}`;
  }

  /**
   * @param prn - plural relation name
   * - `GET` `/singular/:id/{prn}` - Query all
   * - `POST` `/singular/:id/{prn}` - Create many
   */
  pluralRelation(prn: string) {
    return `${this.pxp()}${this.id()}/${prn}`;
  }

  /**
   * @param srn - singular relation name
   * - `GET` `/singular/:id/{srn}/:rid` - Query all
   * - `POST` `/singular/:id/{srn}/:rid` - Create many
   */
  idRelation(srn: string) {
    return `${this.pxp()}${this.id()}/${srn}/${PathParam.RID_DEF}`;
  }
}
