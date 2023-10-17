import { AuthProvider } from '@/components/AuthProvider'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
const poppins = Poppins({
    weight: ['100', '200', '300', '400'],
    subsets: ['devanagari', 'latin', 'latin-ext'],
    preload: true,
})

export const metadata: Metadata = {
    title: 'Cheapify - השוואת מחירי סלי קניות',
    description: 'השוואת סלי קניות בין הרשתות המובילות בישראל',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
