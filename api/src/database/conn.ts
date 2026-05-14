import settings from '../common/_settings';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema'
import { createClient } from '@libsql/client';

const client = createClient({ url: "file:./src/database/" + settings.dbFilename! });
const db = drizzle({ client, schema })

export default db
