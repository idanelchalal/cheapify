'use client'

import { signIn } from 'next-auth/react'
import GoogleIcon from '../../public/google.svg'
import Image from 'next/image'

const GoogleLoginButton = () => {
    return (
        <button
            onClick={() => signIn('google')}
            className="w-full md:w-fit md:px-12 md:py-3 px-4 py-2 flex flex-row items-center text-sm 
            text-neutral-400 hover:text-orange-300 hover:bg-neutral-50 transition justify-center gap-x-2 border 
            border-neutral-100 rounded-md"
        >
            התחבר באמצעות גוגל
            <Image src={GoogleIcon} className="w-8 h-8" alt="Google Icon" />
        </button>
    )
}

export default GoogleLoginButton
