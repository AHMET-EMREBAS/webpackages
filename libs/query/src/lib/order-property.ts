import { Property } from '@webpackages/property';

export function OrderProperty() {
  return Property({ type: 'string', enum: ['asc', 'desc', 'ASC', 'DESC'] ,});
}
