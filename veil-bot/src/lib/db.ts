import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

let pool: Pool;

export async function initDb() {
  pool = new Pool({ connectionString: process.env.PG_CONN });
  await pool.query('SELECT 1');
  console.log('Postgres connected');
}

export async function query(text: string, params?: any[]) {
  if (!pool) await initDb();
  return pool.query(text, params);
}

export function getPool() {
  return pool;
}
