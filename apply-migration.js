const { createClient } = require('@libsql/client');
const fs = require('fs');
const path = require('path');

async function applyMigration() {
  const dbPath = path.join(__dirname, 'prisma', 'dev.db');
  console.log('Applying migration to:', dbPath);

  const client = createClient({ url: 'file:prisma/dev.db' });

  const sql = fs.readFileSync(
    path.join(__dirname, 'prisma', 'migrations', '20260321194329_init', 'migration.sql'),
    'utf-8'
  );

  // Split on semicolons to execute each statement separately
  const statements = sql.split(';').map(s => s.trim()).filter(Boolean);
  for (const stmt of statements) {
    console.log('Executing:', stmt.slice(0, 60) + '...');
    await client.execute(stmt);
  }

  console.log('Migration applied successfully!');
  
  // Check db file size
  const stat = fs.statSync(dbPath);
  console.log('DB file size:', stat.size, 'bytes');
  
  client.close();
}

applyMigration().catch(err => { console.error(err); process.exit(1); });
