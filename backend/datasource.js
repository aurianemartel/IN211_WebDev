import { DataSource } from 'typeorm';
import path from 'path';

import { fileURLToPath } from 'url';

// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current file
const __dirname = path.dirname(__filename);

export const appDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  synchronize: false,
  entities: [path.join(__dirname, "./entities/*.js")],
  migrations: [path.join(__dirname, "./migrations/*.js")],
  cli: {
    migrationsDir: 'migrations',
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
          },
  },
});
