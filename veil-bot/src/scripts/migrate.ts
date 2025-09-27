import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import { initDb, query } from '../src/lib/db';

async function run() {
  await initDb();
  const migrations = readdirSync(path.join(__dirname,'../../migrations')).filter(f => f.endsWith('.sql')).sort();
  for (const m of migrations) {
    const sql = readFileSync(path.join(__dirname,'../../migrations', m), 'utf8');
    console.log(`Applying ${m}`);
    await query(sql);
  }
  console.log('Migrations complete');
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
