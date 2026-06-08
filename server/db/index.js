import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema/users.js';
import { configDotenv } from 'dotenv';
configDotenv()
const sql = neon(process.env.DATABASE_URL);

 export const db = drizzle({ client: sql, schema });

