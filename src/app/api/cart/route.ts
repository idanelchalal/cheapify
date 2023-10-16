import { addProductToCart } from '@/utils/addProductToCart'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const product = await req.json()

    try {
        const query = await addProductToCart(product)
        return NextResponse.json({ product: 'added' })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
