import { IDEntity } from '../database';

export type OrderDirections = 'asc' | 'desc' | 'ASC' | 'DESC';

export type OrderDto<T extends IDEntity> = Record<keyof T, OrderDirections>;
