import { z } from 'zod'

// Zod schemas
export const EnglishMarketLabelSchema = z.enum([
    'HAZI_HINAM',
    'OSHER_HAD',
    'RAMI_LEVY',
    'YOCHANANOF',
])

export const HebrewMarketLabelSchema = z.enum([
    'חצי חינם',
    'אושר עד',
    'רמי לוי',
    'יוחננוף',
])

export const SearchObjectSchema = z.object({
    markets: z.array(EnglishMarketLabelSchema),
    product: z.string(),
})

export const ProductDTOSchema = z.object({
    brand: z.string().optional(),
    img: z.string().optional(),
    title: z.string().optional(),
    price: z.string().optional(),
})

// TS Definition related to zod's schemas | Vanilla ts types definitions
export type ProductDTO = z.infer<typeof ProductDTOSchema>
export type SearchObject = z.infer<typeof SearchObjectSchema>
export type EnglishMarketLabel = z.infer<typeof EnglishMarketLabelSchema>
export type HebrewMarketLabel = z.infer<typeof HebrewMarketLabelSchema>

export type MultiSelectorOptionType<T, K> = {
    label: T
    value: K
}

export type MarketLocatorProp = Record<
    EnglishMarketLabel,
    {
        imgs?: string
        titles?: string
        prices?: string
    }
>

export type MarketsLocatorType = {
    [key in EnglishMarketLabel]: {
        titles?: string
        imgs?: string
        prices?: string
        brand?: string
    }
}

export type ProductsArrayDTO = {
    brands: (string | undefined)[]
    imgs: (string | undefined)[]
    titles: (string | undefined)[]
    prices: (string | undefined)[]
}

export type SearchProductDTO = {
    market: EnglishMarketLabel
    products: ProductDTO[]
}[]

export type MappedProductsResults = {
    market: HebrewMarketLabel
    products: ProductDTO[]
}[]

export const MarketsMapper: Partial<Record<EnglishMarketLabel, string>> = {
    HAZI_HINAM: 'https://shop.hazi-hinam.co.il/searchResults/',
    RAMI_LEVY: 'https://www.rami-levy.co.il/he/online/search?q=',
}

export const EnglishToHebrewMarketMapper: Record<
    EnglishMarketLabel,
    HebrewMarketLabel
> = {
    HAZI_HINAM: 'חצי חינם',
    OSHER_HAD: 'אושר עד',
    RAMI_LEVY: 'רמי לוי',
    YOCHANANOF: 'יוחננוף',
}
