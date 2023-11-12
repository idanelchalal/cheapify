'use server'
import db from '@/drizzle/db'

import { createInsertSchema } from 'drizzle-zod'

import { products } from '@/drizzle/schema'
import { ProductTypeDTO } from './types'

const insertProductSchema = createInsertSchema(products, {
  price: (schema) => schema.price.gt(0),
})
