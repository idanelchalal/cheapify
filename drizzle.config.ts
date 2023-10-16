import type { Config } from 'drizzle-kit'

export default {
    schema: './src/drizzle/schema.ts',
    driver: 'pg',
    dbCredentials: {
        // database: 'cheapify-dev',
        // host: process.env.NEON_HOST_URL as string,
        connectionString: process.env.DRIZZLE_DATABASE_URL as string,
        // user: process.env.NEON_USER as string,
        // port: Number(process.env.NEON_PORT),
        // password: process.env.NEON_PASS as string,
    },

    out: './src/drizzle/migrations',
} satisfies Config
