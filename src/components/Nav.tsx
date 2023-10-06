import { UserIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'
import Link from 'next/link'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    return (
        <header id="main_header">
            <Link href={'/'}>
                <Logo />
            </Link>
            <nav className="flex flex-row gap-x-1">
                {/* User account Icon */}
                <div className="group flex items-center justify-center">
                    <UserIcon className="group-hover:scale-100 scale-95 absolute h-7 w-7 z-10 hover:cursor-pointer text-orange-300" />
                    <div className="group-hover:scale-100 scale-0 transition z-0 rounded-full bg-orange-50 h-8 w-8"></div>
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
