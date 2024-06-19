import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'password',
  database: 'testdb',
  // type:'better-sqlite3',
  // database:'./tmp/database.sqlite',
  synchronize: true,
  autoLoadEntities: true,
  dropSchema: true,
};
