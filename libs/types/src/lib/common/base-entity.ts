export type ID = {
  id: number;
};

export type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type IBaseEntity = ID & Timestamps;

export const BaseEntityFields: Readonly<(keyof IBaseEntity)[]> = [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
];
