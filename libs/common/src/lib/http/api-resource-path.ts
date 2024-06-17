import { names } from '@nx/devkit';

export enum ApiPathEnum {
  ID_KEY = 'id',
  ID_PARAM_DEF = ':id',
  RELATION_ID_KEY = 'rid',
  RELATION_ID_KEY_DEF = ':rid',
}

/**
 * Prefix method can be overrided in need
 */
export class ApiResourcePath {
  protected readonly __singularPath: string;
  protected readonly __pluralPath: string;

  constructor(singularName: string, pluralName: string) {
    this.__singularPath = names(singularName).fileName;
    this.__pluralPath = names(pluralName).fileName;
  }

  protected __idParamDef() {
    return ApiPathEnum.ID_PARAM_DEF;
  }

  protected __relationIdDef() {
    return ApiPathEnum.RELATION_ID_KEY_DEF;
  }

  protected prefix() {
    return '';
  }

  /**
   *
   * @returns entity/:id
   */
  byId() {
    return `${this.prefix()}${this.__singularPath}/${this.__idParamDef()}`;
  }
  /**
   *
   * @returns entities
   */
  plural() {
    return `${this.prefix()}${this.__pluralPath}`;
  }

  /**
   *
   * @returns entity
   */
  singular() {
    return `${this.prefix()}${this.__singularPath}`;
  }

  /**
   *
   * @param singularRelationName Singular relation name
   * @returns
   */
  relationSingular(singularRelationName: string) {
    return `${this.prefix()}${this.byId()}/${singularRelationName}`;
  }

  /**
   *
   * @param pluralRelationName Plural relation name
   * @returns
   */
  relationPlural(pluralRelationName: string) {
    return `${this.prefix()}${this.byId()}/${pluralRelationName}`;
  }

  /**
   *
   * @param singularRelationName Singular relation name
   * @returns
   */
  relationId(singularRelationName: string) {
    return `${this.prefix()}${this.byId()}/${singularRelationName}/${this.__relationIdDef()}`;
  }
}
