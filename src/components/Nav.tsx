import { UserIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'
import Link from 'next/link'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import getUserSession from '@/utils/getUserSession'
import Image from 'next/image'

const Nav = async () => {
    const session = await getUserSession()
    const userBadge = session && (
        <div className="group h-7 w-7 relative hover:cursor-pointer">
            <Image
                sizes="(max-width: 768px) 28px"
                alt="user-profile-avatar"
                className="group-hover:shadow-md group-hover:scale-105 transition object-contain rounded-full"
                fill
                src={session.user?.image!}
            />
        </div>
    )
    return (
        <header id="main_header">
            <Link href={'/'}>
                <Logo />
            </Link>
            <nav className="flex flex-row gap-x-1">
                {/* User account Icon */}
                <div className="group flex items-center justify-center">
                    {userBadge || (
                        <>
                            <UserIcon className="group-hover:scale-100 scale-95 absolute h-7 w-7 z-10 hover:cursor-pointer text-orange-300" />
                            <div className="group-hover:scale-100 scale-0 transition z-0 rounded-full bg-orange-50 h-8 w-8"></div>
                        </>
                    )}
                </div>

                {/* Options Icon */}
                <div className="group flex items-center justify-center">
                    <EllipsisHorizontalIcon className="h-7 w-7 absolute z-10 group-hover:scale-100 scale-95 hover:cursor-pointer text-orange-300" />
                    <div className="group-hover:scale-100 scale-0 transition z-0 rounded-full bg-orange-50 h-8 w-8"></div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
