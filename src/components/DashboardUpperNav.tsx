import { Session } from 'next-auth'
import Logo from './Logo'
import UserBadge from './UserBadge'

const DashboardUpperNav = ({ session }: { session: Session }) => {
    return (
        <nav
            id="upper-nav"
            className="px-4 py-2 border-b flex flex-row items-center justify-between bg-gray-100"
        >
            <Logo small />
            <UserBadge userSession={session} />
        </nav>
    )
}

export default DashboardUpperNav
