import { Column as Col, ColumnOptions } from 'typeorm';

export function Column(options: ColumnOptions) {
  return Col({ nullable: true, type: 'varchar', ...options });
}
