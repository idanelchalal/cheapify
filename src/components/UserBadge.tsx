import { Session } from 'next-auth'
import Image from 'next/image'
import React from 'react'

const UserBadge = ({ userSession }: { userSession: Session }) => {
    const { user } = userSession
    return (
        <div
            className="group flex items-center gap-x-2 cursor-pointer"
            id="user-badge-container"
        >
            <span className="direction-rtl text-xs text-neutral-500 group-hover:text-neutral-400 transition ">
                {user.name}
            </span>
            <div className="group h-7 w-7 relative">
                <Image
                    sizes="(max-width: 768px) 28px"
                    alt="user-profile-avatar"
                    className="group-hover:shadow-md group-hover:scale-105 transition object-contain rounded-full"
                    fill
                    src={user?.image!}
                />
            </div>
        </div>
    )
}

export default UserBadge
