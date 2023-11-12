import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'

const UserBadge = ({
  userSession,
  allowMenu = false,
}: {
  userSession: Session
  allowMenu?: boolean
}) => {
  const { user } = userSession
  return (
    <div className="group  relative" id="user-badge-container">
      <label
        htmlFor="menu-toggle"
        className="flex items-center gap-x-2 cursor-pointer"
      >
        <span className="hidden md:flex direction-rtl text-xs text-neutral-500 group-hover:text-neutral-400 transition">
          {user.name}
        </span>
        <div className="h-7 w-7 relative">
          <Image
            sizes="(max-width: 768px) 28px"
            alt="user-profile-avatar"
            className="group-hover:shadow-md group-hover:scale-105 transition object-contain rounded-full"
            fill
            src={user?.image!}
          />
        </div>
      </label>
      {allowMenu && (
        <div
          id="menu-container"
          className="absolute w-[90vw] right-0 md:w-48 md:right-1 top-9 z-10"
        >
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <div id="badge-menu">
            <label htmlFor="menu-toggle">
              <ul
                className="border list-none bg-neutral-100 rounded-md overflow-hidden 
              space-y-2 py-1
              text-sm cursor-pointer text-center"
              >
                <li className="hover:text-yellow-400 transition hover:bg-neutral-50 hover:font-semibold py-1">
                  <Link href="/auth/signout">התנתק</Link>
                </li>
                <li className="hover:text-yellow-400 transition hover:bg-neutral-50 hover:font-semibold py-1">
                  <Link href={'/dashboard/cart'}>העגלה שלי</Link>
                </li>
              </ul>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserBadge
