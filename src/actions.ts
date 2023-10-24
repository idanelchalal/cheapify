'use server'
import db from '@/drizzle/db'

import { createInsertSchema } from 'drizzle-zod'

import { products } from '@/drizzle/schema'

export type addProductToCartFnType = typeof addProductToCart

const insertProductSchema = createInsertSchema(products, {
    price: (schema) => schema.price.gt(0),
})

export async function addProductToCart(rawData: FormData) {
    const product = JSON.parse(rawData.get('product')?.toString() as string)

    const { success } = insertProductSchema.safeParse(product)

    if (!success) throw new Error('Error: while parsing product')

    try {
        const query = await db.insert(products).values(product)
        return query
    } catch (error) {
        // handle the error here
        console.error('Error: while adding product to cart', error)
        return { error }
    }
}
