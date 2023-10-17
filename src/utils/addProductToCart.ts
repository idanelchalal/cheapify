import db from '@/drizzle/db'

import { createInsertSchema } from 'drizzle-zod'

import { products } from '@/drizzle/schema'
import { ProductTypeDTO } from '@/types'

export type addProductToCartFnType = typeof addProductToCart

const insertProductSchema = createInsertSchema(products, {
    id: (schema) => schema.id.nullable(),
    addedAt: (schema) => schema.addedAt.nullable(),
    price: (schema) => schema.price.gt(0),
})

export async function addProductToCart(product: ProductTypeDTO) {
    const { success } = insertProductSchema.safeParse(product)
    if (!success) throw new Error('Error: while parsing product')

    const query = await db
        .insert(products)
        .values(product)

        .catch((err) => console.log(err))

    return
}
