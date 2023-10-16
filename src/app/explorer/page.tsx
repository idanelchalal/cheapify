import ExplorerComposer from '@/components/ExplorerComposer'
import getUserSession from '@/utils/getUserSession'
import { redirect } from 'next/navigation'

const CartPage = async () => {
    const session = await getUserSession()
    if (!session) redirect('/auth')

    return (
        <>
            <section className="flex flex-col p-4 m-4 gap-y-6 min-h-screen">
                <ExplorerComposer />
            </section>
        </>
    )
}

export default CartPage
