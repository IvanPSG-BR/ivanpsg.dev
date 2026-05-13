import settings from '../common/_settings';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ url: settings.dbFilename! });
const db = drizzle({ client })
