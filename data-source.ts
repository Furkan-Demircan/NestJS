import { DataSource } from 'typeorm';
import { Todo } from './src/todo/entity/todo.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nest',
  password: 'nest',
  database: 'nest',
  entities: [Todo],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
