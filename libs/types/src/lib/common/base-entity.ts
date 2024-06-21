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

export const BaseEntityFields: Readonly<(keyof BaseEntity)[]> = [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
];

export type OmitBase<T extends BaseEntity> = Omit<T, keyof BaseEntity>;
