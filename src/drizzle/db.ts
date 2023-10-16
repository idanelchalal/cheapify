import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
// import { migrate } from 'drizzle-orm/neon-http/migrator'

neonConfig.fetchConnectionCache = true

const sql = neon(process.env.DRIZZLE_DATABASE_URL!)
const db = drizzle(sql)
// NOT WORKING
// migrate(db, {
//     migrationsFolder: '../drizzle/migrations/',
// })
//     .then(() => console.log('Migration generated'))
//     .catch((err) => console.log('Migration failed!', err))

export default db
