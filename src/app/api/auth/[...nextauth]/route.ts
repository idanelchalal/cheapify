import NextAuth, { AuthOptions, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import db from '@/drizzle/db'
import { users } from '@/drizzle/schema'
import { eq } from 'drizzle-orm'

export const authOptions: AuthOptions = {
    adapter: DrizzleAdapter(db),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        session: async ({ session, user }) => {
            if (session?.user) {
                session.user.id = user.id
            }
            return session
        },

        signIn: async ({ profile, user }) => {
            if (!profile?.email) throw new Error('No profile')
            type UserType = typeof users.$inferInsert

            const newUser: UserType = {
                id: user?.id,
                email: profile?.email,
                image: profile?.image,
                name: profile?.name,
            }

            try {
                await db
                    .update(users)
                    .set({
                        image: profile.image,
                        name: profile.name,
                    })
                    .where(eq(users.email, profile.email))
            } catch (err) {
                // To implement here a error logic incase the update throws an error
                // Create a logs table in the DB with the errors
                console.log(err)
            }

            return true
        },
    },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
