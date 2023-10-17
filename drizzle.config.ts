import type { Config } from 'drizzle-kit'

export default {
    schema: './src/drizzle/schema.ts',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DRIZZLE_DATABASE_URL as string,
    },

    out: './src/drizzle/migrations',
} satisfies Config
