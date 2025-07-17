import { registerAs } from '@nestjs/config';
import entities from 'src/typeorm/';

export default registerAs('database', () => ({
  type: process.env.DB_TYPE,
  host: process.env.PSQL_HOST,
  port: process.env.PSQL_PORT,
  username: process.env.PSQL_USERNAME,
  password: process.env.PSQL_PASSWORD,
  database: process.env.PSQL_DATABASE,
  entities: entities,
  synchronize: process.env.MODE !== 'production',
}));
