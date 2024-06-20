export type ID = {
  id: number;
};

export type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type BaseModel = ID & Timestamps;
