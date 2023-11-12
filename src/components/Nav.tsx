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
      <Link href={'/dashboard/'}>
        <Image
          sizes="(max-width: 768px) 28px"
          alt="user-profile-avatar"
          className="group-hover:shadow-md group-hover:scale-105 transition object-contain rounded-full"
          fill
          src={session.user?.image!}
        />
      </Link>
    </div>
  )

  const optionsIcon = (
    <div className="group flex items-center justify-center relative">
      <input type="checkbox" id="open-menu" className="hidden" />
      <div
        id="badge-menu"
        className=" md:w-48 w-[90vw] px-4 py-2 absolute z-10 top-6 -right-3"
      >
        <ul
          className="relative border list-none bg-neutral-50 rounded-md overflow-hidden 
              space-y-2 py-1 pt-5
              text-sm  text-center"
        >
          <label htmlFor="open-menu">
            <span className="absolute left-0 top-0 m-1 z-20 rounded-full bg-orange-100 text-zinc-500 text-xs p-1 cursor-pointer">
              X
            </span>
          </label>
          <li className="hover:text-yellow-400 transition hover:bg-neutral-100 hover:font-semibold py-1 cursor-pointer">
            <Link href="/auth/signout" className="w-full h-full block">
              התנתק
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition hover:bg-neutral-100 hover:font-semibold py-1 cursor-pointer">
            <Link href={'/dashboard/cart'} className="w-full h-full block">
              העגלה שלי
            </Link>
          </li>
        </ul>
      </div>
      <label htmlFor="open-menu">
        <EllipsisHorizontalIcon className="h-7 w-7 absolute z-10 group-hover:scale-100 scale-95 hover:cursor-pointer text-orange-300" />
        <div className="group-hover:scale-100 scale-0 transition z-0 rounded-full bg-orange-50 h-8 w-8"></div>
      </label>
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
            <Link href="/auth">
              <UserIcon className="group-hover:scale-100 scale-95 absolute h-7 w-7 z-10 hover:cursor-pointer text-orange-300" />
              <div className="group-hover:scale-100 scale-0 transition z-0 rounded-full bg-orange-50 h-8 w-8"></div>
            </Link>
          )}
        </div>

        {/* Options Icon */}
        {userBadge && optionsIcon}
      </nav>
    </header>
  )
}

export default Nav
