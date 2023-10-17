'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div
            id="error-container"
            className="w-full h-screen flex flex-col justify-start py-16 px-4 md:px-0 items-center"
        >
            <h1 className="direction-rtl text-3xl md:text-5xl text-orange-300 tracking-wider mb-3">
                משהו השתבש :(
            </h1>
            <Link
                href={'/'}
                className="text-neutral-400 text-sm tracking-tight"
            >
                חזור לעמוד הראשי
            </Link>
        </div>
    )
}
