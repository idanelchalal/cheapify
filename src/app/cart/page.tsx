import getUserSession from '@/utils/getUserSession'
import { redirect } from 'next/navigation'
import React from 'react'

const CartPage = async () => {
    const session = await getUserSession()
    if (!session) redirect('/auth')

    return <div>page</div>
}

export default CartPage
