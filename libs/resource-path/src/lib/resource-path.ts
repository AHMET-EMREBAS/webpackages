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
   * - `GET` `/singular/:id` - Get item by id
   * - `PUT` `/singular/:id` - Update item by id and body
   * - `DELETE` `/singular/:id` - Delete item by id
   * - `POST` `/singular/:id` - Get metadata, Force update, Activate, Update specific field
   */
  plural() {
    return `${this.pxp()}${this._pp}`;
  }
  
  /**
   * @GET /singular
   * @POST /singular
   */
  singular() {
    return `${this.pxp()}${this._sp}`;
  }

  /**
   *
   * @param srn Singular relation name
   */
  singularRelation(srn: string) {
    return `${this.pxp()}${this.id()}/${srn}`;
  }

  pluralRelation(prn: string) {
    return `${this.pxp()}${this.id()}/${prn}`;
  }

  /**
   * @GET /singular/{id}/<relation-name>/<relation-id>n-id}
   * @POST /singular/{id}/<relation-name>/<relation-id>n-id}
   * @PUT /singular/{id}/<relation-name>/<relation-id>n-id}
   * @DELETE /singular/{id}/<relation-name>/<relation-id>n-id}
   * @param srn Singular relation name
   */
  idRelation(srn: string) {
    return `${this.pxp()}${this.id()}/${srn}/${PathParam.RID_DEF}`;
  }
}
