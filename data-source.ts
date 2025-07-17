import { DataSource } from 'typeorm';
import entities from './src/typeorm/';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nest',
  password: 'nest',
  database: 'nest',
  entities: entities,
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
