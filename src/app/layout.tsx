import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { AuthProvider } from '@/components/AuthProvider'

const poppins = Poppins({
    weight: ['100', '200', '300', '400'],
    subsets: ['devanagari', 'latin', 'latin-ext'],
    preload: true,
})

export const metadata: Metadata = {
    title: 'Cheapify - השוואת מחירי סלי קניות',
    description: 'השוואת סלי קניות בין הרשתות המובילות בישראל',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <main className="max-w-7xl mx-auto overflow-x-hidden">
                    <AuthProvider>
                        <Nav />
                        <main id="page-wrapper mt-12">{children}</main>
                    </AuthProvider>
                </main>
            </body>
        </html>
    )
}
