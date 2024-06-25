export class ID {
  id: number;
}

export class Timestamps {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export class BaseEntity implements ID, Timestamps {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  active: boolean;
}

export class BaseView implements ID, Timestamps, BaseEntity {
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  id: number;
  eid: number;
}
export const BaseEntityFields: Readonly<(keyof BaseView)[]> = [
  'id',
  'eid',
  'createdAt',
  'updatedAt',
  'deletedAt',
];

export type OmitBase<T extends BaseEntity> = Omit<T, keyof BaseEntity>;
