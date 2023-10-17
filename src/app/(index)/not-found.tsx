import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <div
            id="not-found"
            className="w-full h-screen flex flex-col justify-start py-16 px-4 md:px-0 items-center"
        >
            <h1 className="direction-rtl text-3xl md:text-5xl text-orange-300 tracking-wider mb-3">
                העמוד לא נמצא :/
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

export default notFound
