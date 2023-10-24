import { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import '../globals.css'

import { redirect } from 'next/navigation'
import getUserSession from '@/utils/getUserSession'

import { AuthProvider } from '@/components/AuthProvider'

import DashboardUpperNav from '@/components/DashboardUpperNav'
import RQProvider from '@/components/RQProvider'
import ToastProvider from '@/components/ToastProvider'

const poppins = Poppins({
    weight: ['100', '200', '300', '400'],
    subsets: ['devanagari', 'latin', 'latin-ext'],
    preload: true,
})

export const metadata: Metadata = {
    title: 'Cheapify - פאנל אישי',
    description: 'השוואת סלי קניות בין הרשתות המובילות בישראל',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const userSession = await getUserSession()
    if (!userSession) redirect('/')

    return (
        <html lang="en">
            <body className={poppins.className}>
                <main
                    id="dashboard-container"
                    className="w-full bg-gray-100 h-screen overflow-x-hidden overflow-y-hidden flex flex-col"
                >
                    <AuthProvider>
                        <RQProvider>
                            <ToastProvider />
                            <DashboardUpperNav session={userSession} />
                            <section
                                id="dashboard-dynamic-wrapper"
                                className="flex-1 overflow-x-hidden overflow-y-scroll flex flex-col"
                            >
                                {children}
                            </section>
                        </RQProvider>
                    </AuthProvider>
                </main>
            </body>
        </html>
    )
}
